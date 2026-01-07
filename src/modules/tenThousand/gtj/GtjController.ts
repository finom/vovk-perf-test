import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtj")
export default class GtjController {
  @operation({
    summary: "Get Gtj",
  })
  @get()
  static getGtj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gtj",
  })
  @post("{id}")
  static createGtj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
