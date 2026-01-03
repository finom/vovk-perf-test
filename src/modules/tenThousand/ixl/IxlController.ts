import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixls")
export default class IxlController {
  @operation({
    summary: "Get Ixls",
  })
  @get()
  static getIxls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixl",
  })
  @post("{id}")
  static createIxl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
