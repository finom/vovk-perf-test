import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhks")
export default class BhkController {
  @operation({
    summary: "Get Bhks",
  })
  @get()
  static getBhks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bhk",
  })
  @post("{id}")
  static createBhk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
