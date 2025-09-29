import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ftds")
export default class FtdController {
  @operation({
    summary: "Get Ftds",
  })
  @get()
  static getFtds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ftd",
  })
  @post("{id}")
  static createFtd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
