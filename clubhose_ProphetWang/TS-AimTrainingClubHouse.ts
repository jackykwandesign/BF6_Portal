// Generate spawner IDs from 1 to 45
const SPAWNER_IDS = Array.from({ length: 45 }, (_, i) => i + 1);

export async function OnGameModeStarted() {
    mod.EnableHQ(mod.GetHQ(1), true);

    // Spawn initial AI on all spawners
    for (const id of SPAWNER_IDS) {
        const spawner = mod.GetSpawner(id);
        spawnAI(spawner);
    }

    TickUpdate();
}

export function OnPlayerJoinGame(player: mod.Player): void {
    if (!isAI(player)) {
        SrPlayer.get(player); // Register player
    }
}

export function OnPlayerDied(player: mod.Player): void {
    if (!isAI(player)) return;

    const id = mod.GetObjId(player);
    const deadAI = SrSoldier.getByPlayer(player);

    if (deadAI) {
        spawnAI(deadAI.spawner);
        SrSoldier.removeDeadAI(id);
    }
}

export function OnSpawnerSpawned(player: mod.Player, spawner: mod.Spawner): void {
    if (!isAI(player)) return;

    const srSoldier = SrSoldier.get(player, spawner);
    srSoldier?.setState();
}

// ----------------------------------------------------

class SrSoldier {
    constructor(
        public player: mod.Player,
        public spawner: mod.Spawner,
        public playerId = mod.GetObjId(player)
    ) {}

    private static all: Record<number, SrSoldier> = {};

    setState(): void {
        const p = this.player;
        mod.AIEnableTargeting(p, false);
        mod.AIIdleBehavior(p);
        mod.AIEnableShooting(p, false);
    }

    static get(player: mod.Player, spawner: mod.Spawner): SrSoldier | undefined {
        const id = mod.GetObjId(player);
        if (id < 0) return undefined;

        if (!this.all[id]) {
            this.all[id] = new SrSoldier(player, spawner);
        }
        return this.all[id];
    }

    static getByPlayer(player: mod.Player): SrSoldier | undefined {
        return this.all[mod.GetObjId(player)];
    }

    static removeDeadAI(id: number): void {
        delete this.all[id];
    }
}

// ----------------------------------------------------

class SrPlayer {
    constructor(
        public player: mod.Player,
        public playerId = mod.GetObjId(player)
    ) {}

    private static all: Record<number, SrPlayer> = {};

    static get(player: mod.Player): SrPlayer | undefined {
        const id = mod.GetObjId(player);
        if (id < 0) return undefined;

        if (!this.all[id]) {
            this.all[id] = new SrPlayer(player);
        }
        return this.all[id];
    }

    static refillAllAmmo(): void {
        for (const sp of Object.values(this.all)) {
            RefillPlayersAmmo(sp.player);
        }
    }
}

// ----------------------------------------------------

async function TickUpdate() {
    const tickRate = 0.5; // every 0.5 sec refill

    while (true) {
        await mod.Wait(tickRate);
        SrPlayer.refillAllAmmo();
    }
}

function spawnAI(spawner: mod.Spawner): void {
    mod.SpawnAIFromAISpawner(spawner, mod.SoldierClass.Support, mod.GetTeam(2));
}

function isAI(player: mod.Player): boolean {
    return mod.GetSoldierState(player, mod.SoldierStateBool.IsAISoldier);
}

function RefillPlayersAmmo(player: mod.Player): void {
    mod.SetInventoryAmmo(player, mod.InventorySlots.PrimaryWeapon, 400);
    mod.SetInventoryMagazineAmmo(player, mod.InventorySlots.PrimaryWeapon, 400);

    mod.SetInventoryAmmo(player, mod.InventorySlots.SecondaryWeapon, 400);
    mod.SetInventoryMagazineAmmo(player, mod.InventorySlots.SecondaryWeapon, 400);
}