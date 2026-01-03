import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlgs")
export default class JlgController {
  @operation({
    summary: "Get Jlgs",
  })
  @get()
  static getJlgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jlg",
  })
  @post("{id}")
  static createJlg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
