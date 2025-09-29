import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aars")
export default class AarController {
  @operation({
    summary: "Get Aars",
  })
  @get()
  static getAars = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aar",
  })
  @post("{id}")
  static createAar = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
