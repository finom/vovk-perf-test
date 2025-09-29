import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebus")
export default class EbuController {
  @operation({
    summary: "Get Ebus",
  })
  @get()
  static getEbus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ebu",
  })
  @post("{id}")
  static createEbu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
