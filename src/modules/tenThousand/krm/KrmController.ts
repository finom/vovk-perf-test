import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("krms")
export default class KrmController {
  @operation({
    summary: "Get Krms",
  })
  @get()
  static getKrms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Krm",
  })
  @post("{id}")
  static createKrm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
