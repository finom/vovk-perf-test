import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cds")
export default class CdsController {
  @operation({
    summary: "Get Cds",
  })
  @get()
  static getCds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cds",
  })
  @post("{id}")
  static createCds = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
