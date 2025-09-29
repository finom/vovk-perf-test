import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmzs")
export default class GmzController {
  @operation({
    summary: "Get Gmzs",
  })
  @get()
  static getGmzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gmz",
  })
  @post("{id}")
  static createGmz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
