import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gyos")
export default class GyoController {
  @operation({
    summary: "Get Gyos",
  })
  @get()
  static getGyos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gyo",
  })
  @post("{id}")
  static createGyo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
