import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbjs")
export default class CbjController {
  @operation({
    summary: "Get Cbjs",
  })
  @get()
  static getCbjs = procedure({
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
