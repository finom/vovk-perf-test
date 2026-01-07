import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcl")
export default class GclController {
  @operation({
    summary: "Get Gcl",
  })
  @get()
  static getGcl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gcl",
  })
  @post("{id}")
  static createGcl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
