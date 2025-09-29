import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bsqs")
export default class BsqController {
  @operation({
    summary: "Get Bsqs",
  })
  @get()
  static getBsqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bsq",
  })
  @post("{id}")
  static createBsq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
