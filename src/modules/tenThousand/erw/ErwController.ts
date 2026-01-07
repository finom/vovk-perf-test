import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erw")
export default class ErwController {
  @operation({
    summary: "Get Erw",
  })
  @get()
  static getErw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Erw",
  })
  @post("{id}")
  static createErw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
