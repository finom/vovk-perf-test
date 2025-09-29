import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzls")
export default class MzlController {
  @operation({
    summary: "Get Mzls",
  })
  @get()
  static getMzls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mzl",
  })
  @post("{id}")
  static createMzl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
