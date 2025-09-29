import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljvs")
export default class LjvController {
  @operation({
    summary: "Get Ljvs",
  })
  @get()
  static getLjvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ljv",
  })
  @post("{id}")
  static createLjv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
