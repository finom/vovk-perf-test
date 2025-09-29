import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgfs")
export default class BgfController {
  @operation({
    summary: "Get Bgfs",
  })
  @get()
  static getBgfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgf",
  })
  @post("{id}")
  static createBgf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
