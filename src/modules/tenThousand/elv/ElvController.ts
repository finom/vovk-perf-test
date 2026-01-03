import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elvs")
export default class ElvController {
  @operation({
    summary: "Get Elvs",
  })
  @get()
  static getElvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Elv",
  })
  @post("{id}")
  static createElv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
