import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ncds")
export default class NcdController {
  @operation({
    summary: "Get Ncds",
  })
  @get()
  static getNcds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ncd",
  })
  @post("{id}")
  static createNcd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
