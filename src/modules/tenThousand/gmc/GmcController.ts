import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmcs")
export default class GmcController {
  @operation({
    summary: "Get Gmcs",
  })
  @get()
  static getGmcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gmc",
  })
  @post("{id}")
  static createGmc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
