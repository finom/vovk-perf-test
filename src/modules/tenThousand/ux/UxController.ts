import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uxes")
export default class UxController {
  @operation({
    summary: "Get Uxes",
  })
  @get()
  static getUxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ux",
  })
  @post("{id}")
  static createUx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
