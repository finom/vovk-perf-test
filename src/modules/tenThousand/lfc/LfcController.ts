import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfcs")
export default class LfcController {
  @operation({
    summary: "Get Lfcs",
  })
  @get()
  static getLfcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lfc",
  })
  @post("{id}")
  static createLfc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
