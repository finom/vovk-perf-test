import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxfs")
export default class BxfController {
  @operation({
    summary: "Get Bxfs",
  })
  @get()
  static getBxfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxf",
  })
  @post("{id}")
  static createBxf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
