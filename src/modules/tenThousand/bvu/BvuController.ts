import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvus")
export default class BvuController {
  @operation({
    summary: "Get Bvus",
  })
  @get()
  static getBvus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bvu",
  })
  @post("{id}")
  static createBvu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
