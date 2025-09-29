import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cds")
export default class CdController {
  @operation({
    summary: "Get Cds",
  })
  @get()
  static getCds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cd",
  })
  @post("{id}")
  static createCd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
