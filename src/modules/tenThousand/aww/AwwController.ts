import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awws")
export default class AwwController {
  @operation({
    summary: "Get Awws",
  })
  @get()
  static getAwws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aww",
  })
  @post("{id}")
  static createAww = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
