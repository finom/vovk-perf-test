import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azqs")
export default class AzqController {
  @operation({
    summary: "Get Azqs",
  })
  @get()
  static getAzqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azq",
  })
  @post("{id}")
  static createAzq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
