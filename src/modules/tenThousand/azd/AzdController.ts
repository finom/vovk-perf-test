import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azd")
export default class AzdController {
  @operation({
    summary: "Get Azd",
  })
  @get()
  static getAzd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azd",
  })
  @post("{id}")
  static createAzd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
