import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isc")
export default class IscController {
  @operation({
    summary: "Get Isc",
  })
  @get()
  static getIsc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isc",
  })
  @post("{id}")
  static createIsc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
