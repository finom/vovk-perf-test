import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kiws")
export default class KiwController {
  @operation({
    summary: "Get Kiws",
  })
  @get()
  static getKiws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kiw",
  })
  @post("{id}")
  static createKiw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
