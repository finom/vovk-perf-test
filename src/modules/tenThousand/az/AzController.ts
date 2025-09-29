import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azs")
export default class AzController {
  @operation({
    summary: "Get Azs",
  })
  @get()
  static getAzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Az",
  })
  @post("{id}")
  static createAz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
