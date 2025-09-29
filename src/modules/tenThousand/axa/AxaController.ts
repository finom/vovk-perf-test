import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axas")
export default class AxaController {
  @operation({
    summary: "Get Axas",
  })
  @get()
  static getAxas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axa",
  })
  @post("{id}")
  static createAxa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
