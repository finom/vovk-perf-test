import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igis")
export default class IgiController {
  @operation({
    summary: "Get Igis",
  })
  @get()
  static getIgis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igi",
  })
  @post("{id}")
  static createIgi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
