import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evbs")
export default class EvbController {
  @operation({
    summary: "Get Evbs",
  })
  @get()
  static getEvbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Evb",
  })
  @post("{id}")
  static createEvb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
