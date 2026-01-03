import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebks")
export default class EbkController {
  @operation({
    summary: "Get Ebks",
  })
  @get()
  static getEbks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebk",
  })
  @post("{id}")
  static createEbk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
