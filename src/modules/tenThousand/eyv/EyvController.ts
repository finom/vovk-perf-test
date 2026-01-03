import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyvs")
export default class EyvController {
  @operation({
    summary: "Get Eyvs",
  })
  @get()
  static getEyvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyv",
  })
  @post("{id}")
  static createEyv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
