import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dons")
export default class DonController {
  @operation({
    summary: "Get Dons",
  })
  @get()
  static getDons = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Don",
  })
  @post("{id}")
  static createDon = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
