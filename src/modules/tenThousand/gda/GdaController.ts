import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdas")
export default class GdaController {
  @operation({
    summary: "Get Gdas",
  })
  @get()
  static getGdas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gda",
  })
  @post("{id}")
  static createGda = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
