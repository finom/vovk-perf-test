import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dp")
export default class DpController {
  @operation({
    summary: "Get Dp",
  })
  @get()
  static getDp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dp",
  })
  @post("{id}")
  static createDp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
