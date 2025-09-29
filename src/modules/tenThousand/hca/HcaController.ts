import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hcas")
export default class HcaController {
  @operation({
    summary: "Get Hcas",
  })
  @get()
  static getHcas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hca",
  })
  @post("{id}")
  static createHca = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
