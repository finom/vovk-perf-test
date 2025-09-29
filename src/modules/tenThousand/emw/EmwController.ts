import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("emws")
export default class EmwController {
  @operation({
    summary: "Get Emws",
  })
  @get()
  static getEmws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Emw",
  })
  @post("{id}")
  static createEmw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
