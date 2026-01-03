import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebvs")
export default class EbvController {
  @operation({
    summary: "Get Ebvs",
  })
  @get()
  static getEbvs = procedure({
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
