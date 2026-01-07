import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebg")
export default class EbgController {
  @operation({
    summary: "Get Ebg",
  })
  @get()
  static getEbg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebg",
  })
  @post("{id}")
  static createEbg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
