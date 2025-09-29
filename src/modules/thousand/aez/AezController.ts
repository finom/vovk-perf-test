import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aezs")
export default class AezController {
  @operation({
    summary: "Get Aezs",
  })
  @get()
  static getAezs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aez",
  })
  @post("{id}")
  static createAez = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
