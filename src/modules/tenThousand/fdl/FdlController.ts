import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdls")
export default class FdlController {
  @operation({
    summary: "Get Fdls",
  })
  @get()
  static getFdls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdl",
  })
  @post("{id}")
  static createFdl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
