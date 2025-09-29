import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("inxes")
export default class InxController {
  @operation({
    summary: "Get Inxes",
  })
  @get()
  static getInxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Inx",
  })
  @post("{id}")
  static createInx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
