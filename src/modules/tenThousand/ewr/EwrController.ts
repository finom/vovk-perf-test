import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewrs")
export default class EwrController {
  @operation({
    summary: "Get Ewrs",
  })
  @get()
  static getEwrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewr",
  })
  @post("{id}")
  static createEwr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
