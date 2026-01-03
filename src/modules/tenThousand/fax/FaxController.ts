import { procedure, prefix, get, post, operation } from "vovk";

@prefix("faxes")
export default class FaxController {
  @operation({
    summary: "Get Faxes",
  })
  @get()
  static getFaxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fax",
  })
  @post("{id}")
  static createFax = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
