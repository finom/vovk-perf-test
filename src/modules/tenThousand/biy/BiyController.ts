import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("biys")
export default class BiyController {
  @operation({
    summary: "Get Biys",
  })
  @get()
  static getBiys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Biy",
  })
  @post("{id}")
  static createBiy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
