import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azds")
export default class AzdController {
  @operation({
    summary: "Get Azds",
  })
  @get()
  static getAzds = procedure({
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
