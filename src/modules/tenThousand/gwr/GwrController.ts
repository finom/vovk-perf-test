import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwrs")
export default class GwrController {
  @operation({
    summary: "Get Gwrs",
  })
  @get()
  static getGwrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwr",
  })
  @post("{id}")
  static createGwr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
