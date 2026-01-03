import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncxes")
export default class NcxController {
  @operation({
    summary: "Get Ncxes",
  })
  @get()
  static getNcxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ncx",
  })
  @post("{id}")
  static createNcx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
