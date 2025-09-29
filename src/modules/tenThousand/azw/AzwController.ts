import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azws")
export default class AzwController {
  @operation({
    summary: "Get Azws",
  })
  @get()
  static getAzws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azw",
  })
  @post("{id}")
  static createAzw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
