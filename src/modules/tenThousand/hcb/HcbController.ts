import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hcbs")
export default class HcbController {
  @operation({
    summary: "Get Hcbs",
  })
  @get()
  static getHcbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hcb",
  })
  @post("{id}")
  static createHcb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
