import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbus")
export default class GbuController {
  @operation({
    summary: "Get Gbus",
  })
  @get()
  static getGbus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gbu",
  })
  @post("{id}")
  static createGbu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
