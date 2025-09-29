import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgxes")
export default class MgxController {
  @operation({
    summary: "Get Mgxes",
  })
  @get()
  static getMgxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgx",
  })
  @post("{id}")
  static createMgx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
