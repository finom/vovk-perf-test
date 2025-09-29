import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hors")
export default class HorController {
  @operation({
    summary: "Get Hors",
  })
  @get()
  static getHors = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hor",
  })
  @post("{id}")
  static createHor = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
