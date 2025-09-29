import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hgas")
export default class HgaController {
  @operation({
    summary: "Get Hgas",
  })
  @get()
  static getHgas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hga",
  })
  @post("{id}")
  static createHga = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
