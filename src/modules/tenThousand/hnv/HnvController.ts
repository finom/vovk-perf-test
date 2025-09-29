import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hnvs")
export default class HnvController {
  @operation({
    summary: "Get Hnvs",
  })
  @get()
  static getHnvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hnv",
  })
  @post("{id}")
  static createHnv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
