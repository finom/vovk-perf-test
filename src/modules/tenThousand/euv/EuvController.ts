import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euv")
export default class EuvController {
  @operation({
    summary: "Get Euv",
  })
  @get()
  static getEuv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Euv",
  })
  @post("{id}")
  static createEuv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
