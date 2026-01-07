import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lib")
export default class LibController {
  @operation({
    summary: "Get Lib",
  })
  @get()
  static getLib = procedure({
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
