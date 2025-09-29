import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awbs")
export default class AwbController {
  @operation({
    summary: "Get Awbs",
  })
  @get()
  static getAwbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awb",
  })
  @post("{id}")
  static createAwb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
