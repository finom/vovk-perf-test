import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aips")
export default class AipController {
  @operation({
    summary: "Get Aips",
  })
  @get()
  static getAips = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aip",
  })
  @post("{id}")
  static createAip = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
