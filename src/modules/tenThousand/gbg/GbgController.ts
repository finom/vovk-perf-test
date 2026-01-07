import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbg")
export default class GbgController {
  @operation({
    summary: "Get Gbg",
  })
  @get()
  static getGbg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbg",
  })
  @post("{id}")
  static createGbg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
