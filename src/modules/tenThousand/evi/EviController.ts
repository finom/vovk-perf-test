import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evis")
export default class EviController {
  @operation({
    summary: "Get Evis",
  })
  @get()
  static getEvis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Evi",
  })
  @post("{id}")
  static createEvi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
