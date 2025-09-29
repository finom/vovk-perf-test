import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("btzs")
export default class BtzController {
  @operation({
    summary: "Get Btzs",
  })
  @get()
  static getBtzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Btz",
  })
  @post("{id}")
  static createBtz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
