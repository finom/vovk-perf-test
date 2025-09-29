import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bscs")
export default class BscController {
  @operation({
    summary: "Get Bscs",
  })
  @get()
  static getBscs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bsc",
  })
  @post("{id}")
  static createBsc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
