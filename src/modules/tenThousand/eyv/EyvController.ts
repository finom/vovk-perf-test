import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eyvs")
export default class EyvController {
  @operation({
    summary: "Get Eyvs",
  })
  @get()
  static getEyvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eyv",
  })
  @post("{id}")
  static createEyv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
