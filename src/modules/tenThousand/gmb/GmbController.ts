import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmbs")
export default class GmbController {
  @operation({
    summary: "Get Gmbs",
  })
  @get()
  static getGmbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gmb",
  })
  @post("{id}")
  static createGmb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
