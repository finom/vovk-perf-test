import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hexes")
export default class HexController {
  @operation({
    summary: "Get Hexes",
  })
  @get()
  static getHexes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hex",
  })
  @post("{id}")
  static createHex = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
