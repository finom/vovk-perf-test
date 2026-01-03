import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnvs")
export default class GnvController {
  @operation({
    summary: "Get Gnvs",
  })
  @get()
  static getGnvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gnv",
  })
  @post("{id}")
  static createGnv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
