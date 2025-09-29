import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cgas")
export default class CgaController {
  @operation({
    summary: "Get Cgas",
  })
  @get()
  static getCgas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cga",
  })
  @post("{id}")
  static createCga = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
