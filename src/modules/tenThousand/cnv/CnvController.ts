import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnv")
export default class CnvController {
  @operation({
    summary: "Get Cnv",
  })
  @get()
  static getCnv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cnv",
  })
  @post("{id}")
  static createCnv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
