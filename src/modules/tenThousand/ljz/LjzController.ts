import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljzs")
export default class LjzController {
  @operation({
    summary: "Get Ljzs",
  })
  @get()
  static getLjzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ljz",
  })
  @post("{id}")
  static createLjz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
