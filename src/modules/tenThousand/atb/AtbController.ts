import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("atbs")
export default class AtbController {
  @operation({
    summary: "Get Atbs",
  })
  @get()
  static getAtbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Atb",
  })
  @post("{id}")
  static createAtb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
