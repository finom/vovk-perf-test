import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcjs")
export default class DcjController {
  @operation({
    summary: "Get Dcjs",
  })
  @get()
  static getDcjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dcj",
  })
  @post("{id}")
  static createDcj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
