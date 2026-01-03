import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cens")
export default class CenController {
  @operation({
    summary: "Get Cens",
  })
  @get()
  static getCens = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cen",
  })
  @post("{id}")
  static createCen = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
