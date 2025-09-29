import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ggas")
export default class GgaController {
  @operation({
    summary: "Get Ggas",
  })
  @get()
  static getGgas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gga",
  })
  @post("{id}")
  static createGga = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
