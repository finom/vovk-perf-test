import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eaes")
export default class EaeController {
  @operation({
    summary: "Get Eaes",
  })
  @get()
  static getEaes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eae",
  })
  @post("{id}")
  static createEae = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
