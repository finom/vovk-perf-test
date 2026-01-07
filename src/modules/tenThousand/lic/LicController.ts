import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lic")
export default class LicController {
  @operation({
    summary: "Get Lic",
  })
  @get()
  static getLic = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lic",
  })
  @post("{id}")
  static createLic = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
