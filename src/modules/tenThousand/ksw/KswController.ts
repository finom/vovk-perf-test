import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ksws")
export default class KswController {
  @operation({
    summary: "Get Ksws",
  })
  @get()
  static getKsws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ksw",
  })
  @post("{id}")
  static createKsw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
