import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfis")
export default class CfiController {
  @operation({
    summary: "Get Cfis",
  })
  @get()
  static getCfis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cfi",
  })
  @post("{id}")
  static createCfi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
