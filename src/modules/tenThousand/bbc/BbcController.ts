import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbcs")
export default class BbcController {
  @operation({
    summary: "Get Bbcs",
  })
  @get()
  static getBbcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bbc",
  })
  @post("{id}")
  static createBbc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
