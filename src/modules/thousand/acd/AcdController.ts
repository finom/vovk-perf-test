import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("acds")
export default class AcdController {
  @operation({
    summary: "Get Acds",
  })
  @get()
  static getAcds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Acd",
  })
  @post("{id}")
  static createAcd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
