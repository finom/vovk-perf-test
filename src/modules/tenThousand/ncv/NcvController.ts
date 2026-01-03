import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncvs")
export default class NcvController {
  @operation({
    summary: "Get Ncvs",
  })
  @get()
  static getNcvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ncv",
  })
  @post("{id}")
  static createNcv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
