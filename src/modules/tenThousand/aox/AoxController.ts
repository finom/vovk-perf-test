import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aoxen")
export default class AoxController {
  @operation({
    summary: "Get Aoxen",
  })
  @get()
  static getAoxen = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aox",
  })
  @post("{id}")
  static createAox = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
