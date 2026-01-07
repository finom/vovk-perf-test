import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvp")
export default class GvpController {
  @operation({
    summary: "Get Gvp",
  })
  @get()
  static getGvp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvp",
  })
  @post("{id}")
  static createGvp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
