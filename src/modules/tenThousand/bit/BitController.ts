import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bit")
export default class BitController {
  @operation({
    summary: "Get Bit",
  })
  @get()
  static getBit = procedure({
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
