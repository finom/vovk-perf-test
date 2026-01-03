import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llgs")
export default class LlgController {
  @operation({
    summary: "Get Llgs",
  })
  @get()
  static getLlgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Llg",
  })
  @post("{id}")
  static createLlg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
