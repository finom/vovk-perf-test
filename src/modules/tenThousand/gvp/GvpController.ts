import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvps")
export default class GvpController {
  @operation({
    summary: "Get Gvps",
  })
  @get()
  static getGvps = procedure({
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
