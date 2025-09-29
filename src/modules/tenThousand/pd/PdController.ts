import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("pds")
export default class PdController {
  @operation({
    summary: "Get Pds",
  })
  @get()
  static getPds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Pd",
  })
  @post("{id}")
  static createPd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
