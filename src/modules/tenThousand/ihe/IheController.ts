import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihes")
export default class IheController {
  @operation({
    summary: "Get Ihes",
  })
  @get()
  static getIhes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ihe",
  })
  @post("{id}")
  static createIhe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
