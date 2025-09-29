import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("anas")
export default class AnaController {
  @operation({
    summary: "Get Anas",
  })
  @get()
  static getAnas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ana",
  })
  @post("{id}")
  static createAna = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
