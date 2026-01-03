import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvds")
export default class GvdController {
  @operation({
    summary: "Get Gvds",
  })
  @get()
  static getGvds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvd",
  })
  @post("{id}")
  static createGvd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
