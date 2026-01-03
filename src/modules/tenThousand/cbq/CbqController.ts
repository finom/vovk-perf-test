import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbqs")
export default class CbqController {
  @operation({
    summary: "Get Cbqs",
  })
  @get()
  static getCbqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbq",
  })
  @post("{id}")
  static createCbq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
