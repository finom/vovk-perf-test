import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebv")
export default class EbvController {
  @operation({
    summary: "Get Ebv",
  })
  @get()
  static getEbv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebv",
  })
  @post("{id}")
  static createEbv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
