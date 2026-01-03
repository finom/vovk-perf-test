import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixms")
export default class IxmController {
  @operation({
    summary: "Get Ixms",
  })
  @get()
  static getIxms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixm",
  })
  @post("{id}")
  static createIxm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
