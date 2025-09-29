import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ftls")
export default class FtlController {
  @operation({
    summary: "Get Ftls",
  })
  @get()
  static getFtls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ftl",
  })
  @post("{id}")
  static createFtl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
