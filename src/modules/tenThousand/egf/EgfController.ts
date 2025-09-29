import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("egfs")
export default class EgfController {
  @operation({
    summary: "Get Egfs",
  })
  @get()
  static getEgfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Egf",
  })
  @post("{id}")
  static createEgf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
