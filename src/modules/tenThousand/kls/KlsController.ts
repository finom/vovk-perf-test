import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kls")
export default class KlsController {
  @operation({
    summary: "Get Kls",
  })
  @get()
  static getKls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kls",
  })
  @post("{id}")
  static createKls = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
