import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ews")
export default class EwsController {
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
    summary: "Create Ews",
  })
  @post("{id}")
  static createEws = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
