import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ines")
export default class IneController {
  @operation({
    summary: "Get Ines",
  })
  @get()
  static getInes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ine",
  })
  @post("{id}")
  static createIne = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
