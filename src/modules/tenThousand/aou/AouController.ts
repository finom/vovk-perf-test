import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aous")
export default class AouController {
  @operation({
    summary: "Get Aous",
  })
  @get()
  static getAous = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aou",
  })
  @post("{id}")
  static createAou = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
