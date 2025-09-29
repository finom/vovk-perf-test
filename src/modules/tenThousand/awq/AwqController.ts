import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awqs")
export default class AwqController {
  @operation({
    summary: "Get Awqs",
  })
  @get()
  static getAwqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awq",
  })
  @post("{id}")
  static createAwq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
