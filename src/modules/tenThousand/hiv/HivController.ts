import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hivs")
export default class HivController {
  @operation({
    summary: "Get Hivs",
  })
  @get()
  static getHivs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hiv",
  })
  @post("{id}")
  static createHiv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
