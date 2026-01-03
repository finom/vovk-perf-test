import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crms")
export default class CrmController {
  @operation({
    summary: "Get Crms",
  })
  @get()
  static getCrms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Crm",
  })
  @post("{id}")
  static createCrm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
