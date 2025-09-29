import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bsms")
export default class BsmController {
  @operation({
    summary: "Get Bsms",
  })
  @get()
  static getBsms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bsm",
  })
  @post("{id}")
  static createBsm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
