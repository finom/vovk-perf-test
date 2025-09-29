import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmhs")
export default class GmhController {
  @operation({
    summary: "Get Gmhs",
  })
  @get()
  static getGmhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gmh",
  })
  @post("{id}")
  static createGmh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
