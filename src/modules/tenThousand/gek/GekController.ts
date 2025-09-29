import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("geks")
export default class GekController {
  @operation({
    summary: "Get Geks",
  })
  @get()
  static getGeks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gek",
  })
  @post("{id}")
  static createGek = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
