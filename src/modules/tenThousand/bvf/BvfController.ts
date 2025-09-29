import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvfs")
export default class BvfController {
  @operation({
    summary: "Get Bvfs",
  })
  @get()
  static getBvfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bvf",
  })
  @post("{id}")
  static createBvf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
