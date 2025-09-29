import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awjs")
export default class AwjController {
  @operation({
    summary: "Get Awjs",
  })
  @get()
  static getAwjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awj",
  })
  @post("{id}")
  static createAwj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
