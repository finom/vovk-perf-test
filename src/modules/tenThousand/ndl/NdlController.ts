import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndls")
export default class NdlController {
  @operation({
    summary: "Get Ndls",
  })
  @get()
  static getNdls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ndl",
  })
  @post("{id}")
  static createNdl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
