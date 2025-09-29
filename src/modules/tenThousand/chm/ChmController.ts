import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chms")
export default class ChmController {
  @operation({
    summary: "Get Chms",
  })
  @get()
  static getChms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Chm",
  })
  @post("{id}")
  static createChm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
