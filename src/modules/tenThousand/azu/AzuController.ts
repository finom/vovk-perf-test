import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azus")
export default class AzuController {
  @operation({
    summary: "Get Azus",
  })
  @get()
  static getAzus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azu",
  })
  @post("{id}")
  static createAzu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
