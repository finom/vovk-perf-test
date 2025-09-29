import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwls")
export default class MwlController {
  @operation({
    summary: "Get Mwls",
  })
  @get()
  static getMwls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwl",
  })
  @post("{id}")
  static createMwl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
