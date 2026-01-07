import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncx")
export default class NcxController {
  @operation({
    summary: "Get Ncx",
  })
  @get()
  static getNcx = procedure({
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
