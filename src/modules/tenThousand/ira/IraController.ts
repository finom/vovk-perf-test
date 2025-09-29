import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iras")
export default class IraController {
  @operation({
    summary: "Get Iras",
  })
  @get()
  static getIras = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ira",
  })
  @post("{id}")
  static createIra = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
