import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hivs")
export default class HivController {
  @operation({
    summary: "Get Hivs",
  })
  @get()
  static getHivs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hiv",
  })
  @post("{id}")
  static createHiv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
