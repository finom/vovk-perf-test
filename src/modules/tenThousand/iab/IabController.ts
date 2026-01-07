import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iab")
export default class IabController {
  @operation({
    summary: "Get Iab",
  })
  @get()
  static getIab = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iab",
  })
  @post("{id}")
  static createIab = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
