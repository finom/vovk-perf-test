import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bucs")
export default class BucController {
  @operation({
    summary: "Get Bucs",
  })
  @get()
  static getBucs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Buc",
  })
  @post("{id}")
  static createBuc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
