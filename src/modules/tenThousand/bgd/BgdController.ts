import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgds")
export default class BgdController {
  @operation({
    summary: "Get Bgds",
  })
  @get()
  static getBgds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgd",
  })
  @post("{id}")
  static createBgd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
