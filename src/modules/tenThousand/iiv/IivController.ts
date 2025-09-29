import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iivs")
export default class IivController {
  @operation({
    summary: "Get Iivs",
  })
  @get()
  static getIivs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iiv",
  })
  @post("{id}")
  static createIiv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
