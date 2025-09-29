import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azgs")
export default class AzgController {
  @operation({
    summary: "Get Azgs",
  })
  @get()
  static getAzgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azg",
  })
  @post("{id}")
  static createAzg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
