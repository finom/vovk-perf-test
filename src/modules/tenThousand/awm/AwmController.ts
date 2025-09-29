import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awms")
export default class AwmController {
  @operation({
    summary: "Get Awms",
  })
  @get()
  static getAwms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awm",
  })
  @post("{id}")
  static createAwm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
