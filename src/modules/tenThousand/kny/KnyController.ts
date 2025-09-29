import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("knies")
export default class KnyController {
  @operation({
    summary: "Get Knies",
  })
  @get()
  static getKnies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kny",
  })
  @post("{id}")
  static createKny = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
