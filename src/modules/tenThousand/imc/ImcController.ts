import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imcs")
export default class ImcController {
  @operation({
    summary: "Get Imcs",
  })
  @get()
  static getImcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Imc",
  })
  @post("{id}")
  static createImc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
