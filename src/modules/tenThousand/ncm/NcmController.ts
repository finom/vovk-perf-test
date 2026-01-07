import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncm")
export default class NcmController {
  @operation({
    summary: "Get Ncm",
  })
  @get()
  static getNcm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ncm",
  })
  @post("{id}")
  static createNcm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
