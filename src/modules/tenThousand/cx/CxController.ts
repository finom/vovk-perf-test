import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxes")
export default class CxController {
  @operation({
    summary: "Get Cxes",
  })
  @get()
  static getCxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cx",
  })
  @post("{id}")
  static createCx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
