import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gid")
export default class GidController {
  @operation({
    summary: "Get Gid",
  })
  @get()
  static getGid = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gid",
  })
  @post("{id}")
  static createGid = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
