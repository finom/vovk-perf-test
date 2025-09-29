import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hios")
export default class HioController {
  @operation({
    summary: "Get Hios",
  })
  @get()
  static getHios = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hio",
  })
  @post("{id}")
  static createHio = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
