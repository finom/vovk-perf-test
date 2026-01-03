import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlgs")
export default class NlgController {
  @operation({
    summary: "Get Nlgs",
  })
  @get()
  static getNlgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nlg",
  })
  @post("{id}")
  static createNlg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
