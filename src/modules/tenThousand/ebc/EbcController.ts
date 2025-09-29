import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebcs")
export default class EbcController {
  @operation({
    summary: "Get Ebcs",
  })
  @get()
  static getEbcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ebc",
  })
  @post("{id}")
  static createEbc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
