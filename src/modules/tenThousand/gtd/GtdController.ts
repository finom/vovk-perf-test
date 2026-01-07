import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtd")
export default class GtdController {
  @operation({
    summary: "Get Gtd",
  })
  @get()
  static getGtd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gtd",
  })
  @post("{id}")
  static createGtd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
