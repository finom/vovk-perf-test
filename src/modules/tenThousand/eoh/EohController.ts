import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eohs")
export default class EohController {
  @operation({
    summary: "Get Eohs",
  })
  @get()
  static getEohs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eoh",
  })
  @post("{id}")
  static createEoh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
