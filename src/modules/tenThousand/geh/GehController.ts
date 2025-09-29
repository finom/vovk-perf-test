import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gehs")
export default class GehController {
  @operation({
    summary: "Get Gehs",
  })
  @get()
  static getGehs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Geh",
  })
  @post("{id}")
  static createGeh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
