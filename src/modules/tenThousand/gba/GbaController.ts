import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbas")
export default class GbaController {
  @operation({
    summary: "Get Gbas",
  })
  @get()
  static getGbas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gba",
  })
  @post("{id}")
  static createGba = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
