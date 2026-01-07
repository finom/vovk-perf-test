import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtb")
export default class GtbController {
  @operation({
    summary: "Get Gtb",
  })
  @get()
  static getGtb = procedure({
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
