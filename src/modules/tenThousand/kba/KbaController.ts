import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbas")
export default class KbaController {
  @operation({
    summary: "Get Kbas",
  })
  @get()
  static getKbas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kba",
  })
  @post("{id}")
  static createKba = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
