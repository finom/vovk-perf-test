import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnjs")
export default class MnjController {
  @operation({
    summary: "Get Mnjs",
  })
  @get()
  static getMnjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mnj",
  })
  @post("{id}")
  static createMnj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
