import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ceps")
export default class CepController {
  @operation({
    summary: "Get Ceps",
  })
  @get()
  static getCeps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cep",
  })
  @post("{id}")
  static createCep = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
