import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bits")
export default class BitController {
  @operation({
    summary: "Get Bits",
  })
  @get()
  static getBits = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bit",
  })
  @post("{id}")
  static createBit = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
