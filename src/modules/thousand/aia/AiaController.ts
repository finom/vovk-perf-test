import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aias")
export default class AiaController {
  @operation({
    summary: "Get Aias",
  })
  @get()
  static getAias = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aia",
  })
  @post("{id}")
  static createAia = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
