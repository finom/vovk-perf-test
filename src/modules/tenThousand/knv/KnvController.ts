import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("knvs")
export default class KnvController {
  @operation({
    summary: "Get Knvs",
  })
  @get()
  static getKnvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Knv",
  })
  @post("{id}")
  static createKnv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
