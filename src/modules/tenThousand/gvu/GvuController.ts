import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvus")
export default class GvuController {
  @operation({
    summary: "Get Gvus",
  })
  @get()
  static getGvus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gvu",
  })
  @post("{id}")
  static createGvu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
