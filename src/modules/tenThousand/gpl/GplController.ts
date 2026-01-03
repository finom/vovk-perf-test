import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpls")
export default class GplController {
  @operation({
    summary: "Get Gpls",
  })
  @get()
  static getGpls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpl",
  })
  @post("{id}")
  static createGpl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
