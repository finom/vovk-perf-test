import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edies")
export default class EdyController {
  @operation({
    summary: "Get Edies",
  })
  @get()
  static getEdies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Edy",
  })
  @post("{id}")
  static createEdy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
