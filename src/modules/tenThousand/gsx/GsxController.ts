import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gsxes")
export default class GsxController {
  @operation({
    summary: "Get Gsxes",
  })
  @get()
  static getGsxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gsx",
  })
  @post("{id}")
  static createGsx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
