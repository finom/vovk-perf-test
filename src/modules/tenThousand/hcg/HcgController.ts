import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hcgs")
export default class HcgController {
  @operation({
    summary: "Get Hcgs",
  })
  @get()
  static getHcgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hcg",
  })
  @post("{id}")
  static createHcg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
