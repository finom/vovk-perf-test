import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cru")
export default class CruController {
  @operation({
    summary: "Get Cru",
  })
  @get()
  static getCru = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cru",
  })
  @post("{id}")
  static createCru = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
