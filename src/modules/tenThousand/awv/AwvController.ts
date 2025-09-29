import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awvs")
export default class AwvController {
  @operation({
    summary: "Get Awvs",
  })
  @get()
  static getAwvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awv",
  })
  @post("{id}")
  static createAwv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
