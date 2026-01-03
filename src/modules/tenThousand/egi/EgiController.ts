import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egis")
export default class EgiController {
  @operation({
    summary: "Get Egis",
  })
  @get()
  static getEgis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egi",
  })
  @post("{id}")
  static createEgi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
