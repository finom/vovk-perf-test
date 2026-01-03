import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iscs")
export default class IscController {
  @operation({
    summary: "Get Iscs",
  })
  @get()
  static getIscs = procedure({
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
