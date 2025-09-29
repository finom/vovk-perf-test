import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgvs")
export default class BgvController {
  @operation({
    summary: "Get Bgvs",
  })
  @get()
  static getBgvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgv",
  })
  @post("{id}")
  static createBgv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
