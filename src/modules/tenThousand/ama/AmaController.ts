import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("amas")
export default class AmaController {
  @operation({
    summary: "Get Amas",
  })
  @get()
  static getAmas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ama",
  })
  @post("{id}")
  static createAma = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
