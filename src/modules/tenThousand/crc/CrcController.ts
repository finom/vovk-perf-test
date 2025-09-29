import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("crcs")
export default class CrcController {
  @operation({
    summary: "Get Crcs",
  })
  @get()
  static getCrcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Crc",
  })
  @post("{id}")
  static createCrc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
