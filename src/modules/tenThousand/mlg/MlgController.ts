import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlgs")
export default class MlgController {
  @operation({
    summary: "Get Mlgs",
  })
  @get()
  static getMlgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mlg",
  })
  @post("{id}")
  static createMlg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
