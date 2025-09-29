import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iaes")
export default class IaeController {
  @operation({
    summary: "Get Iaes",
  })
  @get()
  static getIaes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iae",
  })
  @post("{id}")
  static createIae = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
