import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdl")
export default class BdlController {
  @operation({
    summary: "Get Bdl",
  })
  @get()
  static getBdl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdl",
  })
  @post("{id}")
  static createBdl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
