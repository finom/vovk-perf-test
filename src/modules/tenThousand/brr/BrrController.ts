import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("brrs")
export default class BrrController {
  @operation({
    summary: "Get Brrs",
  })
  @get()
  static getBrrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Brr",
  })
  @post("{id}")
  static createBrr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
