import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ews")
export default class EwController {
  @operation({
    summary: "Get Ews",
  })
  @get()
  static getEws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ew",
  })
  @post("{id}")
  static createEw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
