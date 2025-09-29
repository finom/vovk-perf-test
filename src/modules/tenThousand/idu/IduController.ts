import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("idus")
export default class IduController {
  @operation({
    summary: "Get Idus",
  })
  @get()
  static getIdus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Idu",
  })
  @post("{id}")
  static createIdu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
