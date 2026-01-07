import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlg")
export default class JlgController {
  @operation({
    summary: "Get Jlg",
  })
  @get()
  static getJlg = procedure({
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
