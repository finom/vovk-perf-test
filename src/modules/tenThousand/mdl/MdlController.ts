import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdls")
export default class MdlController {
  @operation({
    summary: "Get Mdls",
  })
  @get()
  static getMdls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdl",
  })
  @post("{id}")
  static createMdl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
