import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eyzs")
export default class EyzController {
  @operation({
    summary: "Get Eyzs",
  })
  @get()
  static getEyzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eyz",
  })
  @post("{id}")
  static createEyz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
