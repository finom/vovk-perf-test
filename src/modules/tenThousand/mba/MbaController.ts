import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbas")
export default class MbaController {
  @operation({
    summary: "Get Mbas",
  })
  @get()
  static getMbas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mba",
  })
  @post("{id}")
  static createMba = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
