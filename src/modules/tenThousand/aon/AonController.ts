import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aons")
export default class AonController {
  @operation({
    summary: "Get Aons",
  })
  @get()
  static getAons = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aon",
  })
  @post("{id}")
  static createAon = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
