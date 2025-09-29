import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgcs")
export default class MgcController {
  @operation({
    summary: "Get Mgcs",
  })
  @get()
  static getMgcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgc",
  })
  @post("{id}")
  static createMgc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
