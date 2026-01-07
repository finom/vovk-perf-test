import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdr")
export default class HdrController {
  @operation({
    summary: "Get Hdr",
  })
  @get()
  static getHdr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hdr",
  })
  @post("{id}")
  static createHdr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
