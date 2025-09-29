import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfps")
export default class BfpController {
  @operation({
    summary: "Get Bfps",
  })
  @get()
  static getBfps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bfp",
  })
  @post("{id}")
  static createBfp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
