import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azxes")
export default class AzxController {
  @operation({
    summary: "Get Azxes",
  })
  @get()
  static getAzxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azx",
  })
  @post("{id}")
  static createAzx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
