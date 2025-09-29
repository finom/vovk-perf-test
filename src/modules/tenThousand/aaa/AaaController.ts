import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aaas")
export default class AaaController {
  @operation({
    summary: "Get Aaas",
  })
  @get()
  static getAaas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aaa",
  })
  @post("{id}")
  static createAaa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
