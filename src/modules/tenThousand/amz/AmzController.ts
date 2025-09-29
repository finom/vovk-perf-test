import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("amzs")
export default class AmzController {
  @operation({
    summary: "Get Amzs",
  })
  @get()
  static getAmzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Amz",
  })
  @post("{id}")
  static createAmz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
