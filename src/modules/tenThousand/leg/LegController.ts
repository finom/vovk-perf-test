import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("legs")
export default class LegController {
  @operation({
    summary: "Get Legs",
  })
  @get()
  static getLegs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Leg",
  })
  @post("{id}")
  static createLeg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
