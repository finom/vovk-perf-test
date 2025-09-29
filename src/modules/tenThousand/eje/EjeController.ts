import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejes")
export default class EjeController {
  @operation({
    summary: "Get Ejes",
  })
  @get()
  static getEjes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eje",
  })
  @post("{id}")
  static createEje = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
