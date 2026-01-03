import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bits")
export default class BitController {
  @operation({
    summary: "Get Bits",
  })
  @get()
  static getBits = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bit",
  })
  @post("{id}")
  static createBit = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
