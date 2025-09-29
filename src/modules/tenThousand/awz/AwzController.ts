import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awzs")
export default class AwzController {
  @operation({
    summary: "Get Awzs",
  })
  @get()
  static getAwzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awz",
  })
  @post("{id}")
  static createAwz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
