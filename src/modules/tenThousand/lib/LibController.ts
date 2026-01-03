import { procedure, prefix, get, post, operation } from "vovk";

@prefix("libs")
export default class LibController {
  @operation({
    summary: "Get Libs",
  })
  @get()
  static getLibs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lib",
  })
  @post("{id}")
  static createLib = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
