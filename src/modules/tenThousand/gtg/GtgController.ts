import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtgs")
export default class GtgController {
  @operation({
    summary: "Get Gtgs",
  })
  @get()
  static getGtgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gtg",
  })
  @post("{id}")
  static createGtg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
