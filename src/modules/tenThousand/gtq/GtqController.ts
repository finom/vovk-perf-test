import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtq")
export default class GtqController {
  @operation({
    summary: "Get Gtq",
  })
  @get()
  static getGtq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gtq",
  })
  @post("{id}")
  static createGtq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
