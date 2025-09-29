import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fegs")
export default class FegController {
  @operation({
    summary: "Get Fegs",
  })
  @get()
  static getFegs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Feg",
  })
  @post("{id}")
  static createFeg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
