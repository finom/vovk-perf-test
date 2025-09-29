import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kips")
export default class KipController {
  @operation({
    summary: "Get Kips",
  })
  @get()
  static getKips = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kip",
  })
  @post("{id}")
  static createKip = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
