import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgxes")
export default class BgxController {
  @operation({
    summary: "Get Bgxes",
  })
  @get()
  static getBgxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgx",
  })
  @post("{id}")
  static createBgx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
