import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eezs")
export default class EezController {
  @operation({
    summary: "Get Eezs",
  })
  @get()
  static getEezs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eez",
  })
  @post("{id}")
  static createEez = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
