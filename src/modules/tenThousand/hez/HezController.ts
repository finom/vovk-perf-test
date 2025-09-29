import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hezs")
export default class HezController {
  @operation({
    summary: "Get Hezs",
  })
  @get()
  static getHezs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hez",
  })
  @post("{id}")
  static createHez = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
