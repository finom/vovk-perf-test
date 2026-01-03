import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvfs")
export default class GvfController {
  @operation({
    summary: "Get Gvfs",
  })
  @get()
  static getGvfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvf",
  })
  @post("{id}")
  static createGvf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
