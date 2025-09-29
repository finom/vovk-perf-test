import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfls")
export default class CflController {
  @operation({
    summary: "Get Cfls",
  })
  @get()
  static getCfls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cfl",
  })
  @post("{id}")
  static createCfl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
