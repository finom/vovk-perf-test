import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erws")
export default class ErwController {
  @operation({
    summary: "Get Erws",
  })
  @get()
  static getErws = procedure({
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
