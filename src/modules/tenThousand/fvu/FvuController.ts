import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvus")
export default class FvuController {
  @operation({
    summary: "Get Fvus",
  })
  @get()
  static getFvus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fvu",
  })
  @post("{id}")
  static createFvu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
