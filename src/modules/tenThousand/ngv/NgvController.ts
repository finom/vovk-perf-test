import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ngvs")
export default class NgvController {
  @operation({
    summary: "Get Ngvs",
  })
  @get()
  static getNgvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ngv",
  })
  @post("{id}")
  static createNgv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
