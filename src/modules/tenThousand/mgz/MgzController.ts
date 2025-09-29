import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgzs")
export default class MgzController {
  @operation({
    summary: "Get Mgzs",
  })
  @get()
  static getMgzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgz",
  })
  @post("{id}")
  static createMgz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
