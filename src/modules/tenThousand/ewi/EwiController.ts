import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewis")
export default class EwiController {
  @operation({
    summary: "Get Ewis",
  })
  @get()
  static getEwis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewi",
  })
  @post("{id}")
  static createEwi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
