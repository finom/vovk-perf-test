import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ksses")
export default class KssController {
  @operation({
    summary: "Get Ksses",
  })
  @get()
  static getKsses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kss",
  })
  @post("{id}")
  static createKss = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
