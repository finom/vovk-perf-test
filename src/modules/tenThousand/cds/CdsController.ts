import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cds")
export default class CdsController {
  @operation({
    summary: "Get Cds",
  })
  @get()
  static getCds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cds",
  })
  @post("{id}")
  static createCds = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
