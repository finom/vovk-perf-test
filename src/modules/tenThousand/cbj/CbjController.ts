import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbj")
export default class CbjController {
  @operation({
    summary: "Get Cbj",
  })
  @get()
  static getCbj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbj",
  })
  @post("{id}")
  static createCbj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
