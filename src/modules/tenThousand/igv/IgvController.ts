import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("igvs")
export default class IgvController {
  @operation({
    summary: "Get Igvs",
  })
  @get()
  static getIgvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Igv",
  })
  @post("{id}")
  static createIgv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
