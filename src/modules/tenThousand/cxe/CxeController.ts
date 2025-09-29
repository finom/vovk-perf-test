import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxes")
export default class CxeController {
  @operation({
    summary: "Get Cxes",
  })
  @get()
  static getCxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxe",
  })
  @post("{id}")
  static createCxe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
