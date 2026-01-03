import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmls")
export default class KmlController {
  @operation({
    summary: "Get Kmls",
  })
  @get()
  static getKmls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kml",
  })
  @post("{id}")
  static createKml = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
