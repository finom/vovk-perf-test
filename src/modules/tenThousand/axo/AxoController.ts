import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axos")
export default class AxoController {
  @operation({
    summary: "Get Axos",
  })
  @get()
  static getAxos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axo",
  })
  @post("{id}")
  static createAxo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
