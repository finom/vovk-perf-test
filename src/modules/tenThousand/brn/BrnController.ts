import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("brns")
export default class BrnController {
  @operation({
    summary: "Get Brns",
  })
  @get()
  static getBrns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Brn",
  })
  @post("{id}")
  static createBrn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
