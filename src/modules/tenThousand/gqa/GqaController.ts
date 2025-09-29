import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqas")
export default class GqaController {
  @operation({
    summary: "Get Gqas",
  })
  @get()
  static getGqas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqa",
  })
  @post("{id}")
  static createGqa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
