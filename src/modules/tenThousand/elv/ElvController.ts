import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elv")
export default class ElvController {
  @operation({
    summary: "Get Elv",
  })
  @get()
  static getElv = procedure({
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
