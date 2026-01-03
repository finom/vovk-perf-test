import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crcs")
export default class CrcController {
  @operation({
    summary: "Get Crcs",
  })
  @get()
  static getCrcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Crc",
  })
  @post("{id}")
  static createCrc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
