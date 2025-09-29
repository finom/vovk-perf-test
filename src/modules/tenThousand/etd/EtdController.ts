import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("etds")
export default class EtdController {
  @operation({
    summary: "Get Etds",
  })
  @get()
  static getEtds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Etd",
  })
  @post("{id}")
  static createEtd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
