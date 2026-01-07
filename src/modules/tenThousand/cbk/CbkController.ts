import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbk")
export default class CbkController {
  @operation({
    summary: "Get Cbk",
  })
  @get()
  static getCbk = procedure({
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
