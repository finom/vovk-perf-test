import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ftbs")
export default class FtbController {
  @operation({
    summary: "Get Ftbs",
  })
  @get()
  static getFtbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ftb",
  })
  @post("{id}")
  static createFtb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
