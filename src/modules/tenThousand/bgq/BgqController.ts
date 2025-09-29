import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgqs")
export default class BgqController {
  @operation({
    summary: "Get Bgqs",
  })
  @get()
  static getBgqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgq",
  })
  @post("{id}")
  static createBgq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
