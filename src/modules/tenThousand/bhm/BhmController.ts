import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhms")
export default class BhmController {
  @operation({
    summary: "Get Bhms",
  })
  @get()
  static getBhms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bhm",
  })
  @post("{id}")
  static createBhm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
