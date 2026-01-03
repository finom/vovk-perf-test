import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncjs")
export default class NcjController {
  @operation({
    summary: "Get Ncjs",
  })
  @get()
  static getNcjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ncj",
  })
  @post("{id}")
  static createNcj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
