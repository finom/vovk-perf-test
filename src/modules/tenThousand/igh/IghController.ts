import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igh")
export default class IghController {
  @operation({
    summary: "Get Igh",
  })
  @get()
  static getIgh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igh",
  })
  @post("{id}")
  static createIgh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
