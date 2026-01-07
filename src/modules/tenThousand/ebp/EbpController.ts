import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebp")
export default class EbpController {
  @operation({
    summary: "Get Ebp",
  })
  @get()
  static getEbp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebp",
  })
  @post("{id}")
  static createEbp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
