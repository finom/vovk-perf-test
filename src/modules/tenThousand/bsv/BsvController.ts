import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bsvs")
export default class BsvController {
  @operation({
    summary: "Get Bsvs",
  })
  @get()
  static getBsvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bsv",
  })
  @post("{id}")
  static createBsv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
