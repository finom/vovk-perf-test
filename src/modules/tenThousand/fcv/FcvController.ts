import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcv")
export default class FcvController {
  @operation({
    summary: "Get Fcv",
  })
  @get()
  static getFcv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fcv",
  })
  @post("{id}")
  static createFcv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
