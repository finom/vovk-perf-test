import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eobs")
export default class EobController {
  @operation({
    summary: "Get Eobs",
  })
  @get()
  static getEobs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eob",
  })
  @post("{id}")
  static createEob = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
