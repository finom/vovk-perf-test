import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fids")
export default class FidController {
  @operation({
    summary: "Get Fids",
  })
  @get()
  static getFids = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fid",
  })
  @post("{id}")
  static createFid = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
