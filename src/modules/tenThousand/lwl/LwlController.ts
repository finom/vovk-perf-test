import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwls")
export default class LwlController {
  @operation({
    summary: "Get Lwls",
  })
  @get()
  static getLwls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwl",
  })
  @post("{id}")
  static createLwl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
