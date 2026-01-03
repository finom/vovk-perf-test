import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hexes")
export default class HexController {
  @operation({
    summary: "Get Hexes",
  })
  @get()
  static getHexes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hex",
  })
  @post("{id}")
  static createHex = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
