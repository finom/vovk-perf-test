import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnv")
export default class MnvController {
  @operation({
    summary: "Get Mnv",
  })
  @get()
  static getMnv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mnv",
  })
  @post("{id}")
  static createMnv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
