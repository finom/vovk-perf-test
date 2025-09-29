import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebhs")
export default class EbhController {
  @operation({
    summary: "Get Ebhs",
  })
  @get()
  static getEbhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ebh",
  })
  @post("{id}")
  static createEbh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
