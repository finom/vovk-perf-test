import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dirs")
export default class DirController {
  @operation({
    summary: "Get Dirs",
  })
  @get()
  static getDirs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dir",
  })
  @post("{id}")
  static createDir = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
