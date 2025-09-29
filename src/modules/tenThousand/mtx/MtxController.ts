import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mtxes")
export default class MtxController {
  @operation({
    summary: "Get Mtxes",
  })
  @get()
  static getMtxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mtx",
  })
  @post("{id}")
  static createMtx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
