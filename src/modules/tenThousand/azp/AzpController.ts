import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azps")
export default class AzpController {
  @operation({
    summary: "Get Azps",
  })
  @get()
  static getAzps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azp",
  })
  @post("{id}")
  static createAzp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
