import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fous")
export default class FouController {
  @operation({
    summary: "Get Fous",
  })
  @get()
  static getFous = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fou",
  })
  @post("{id}")
  static createFou = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
