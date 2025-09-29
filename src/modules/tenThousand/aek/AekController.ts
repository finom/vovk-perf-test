import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aeks")
export default class AekController {
  @operation({
    summary: "Get Aeks",
  })
  @get()
  static getAeks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aek",
  })
  @post("{id}")
  static createAek = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
