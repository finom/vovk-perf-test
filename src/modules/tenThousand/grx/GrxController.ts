import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("grxes")
export default class GrxController {
  @operation({
    summary: "Get Grxes",
  })
  @get()
  static getGrxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Grx",
  })
  @post("{id}")
  static createGrx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
