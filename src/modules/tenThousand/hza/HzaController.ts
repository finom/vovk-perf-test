import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzas")
export default class HzaController {
  @operation({
    summary: "Get Hzas",
  })
  @get()
  static getHzas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hza",
  })
  @post("{id}")
  static createHza = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
