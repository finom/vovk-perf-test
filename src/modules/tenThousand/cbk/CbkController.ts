import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbks")
export default class CbkController {
  @operation({
    summary: "Get Cbks",
  })
  @get()
  static getCbks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbk",
  })
  @post("{id}")
  static createCbk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
