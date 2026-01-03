import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnbs")
export default class MnbController {
  @operation({
    summary: "Get Mnbs",
  })
  @get()
  static getMnbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mnb",
  })
  @post("{id}")
  static createMnb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
