import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvd")
export default class GvdController {
  @operation({
    summary: "Get Gvd",
  })
  @get()
  static getGvd = procedure({
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
