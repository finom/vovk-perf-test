import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljls")
export default class LjlController {
  @operation({
    summary: "Get Ljls",
  })
  @get()
  static getLjls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ljl",
  })
  @post("{id}")
  static createLjl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
