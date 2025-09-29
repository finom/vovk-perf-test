import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nnos")
export default class NnoController {
  @operation({
    summary: "Get Nnos",
  })
  @get()
  static getNnos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nno",
  })
  @post("{id}")
  static createNno = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
