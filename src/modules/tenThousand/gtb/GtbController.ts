import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtbs")
export default class GtbController {
  @operation({
    summary: "Get Gtbs",
  })
  @get()
  static getGtbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gtb",
  })
  @post("{id}")
  static createGtb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
