import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glg")
export default class GlgController {
  @operation({
    summary: "Get Glg",
  })
  @get()
  static getGlg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Glg",
  })
  @post("{id}")
  static createGlg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
