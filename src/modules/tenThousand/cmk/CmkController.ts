import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmk")
export default class CmkController {
  @operation({
    summary: "Get Cmk",
  })
  @get()
  static getCmk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmk",
  })
  @post("{id}")
  static createCmk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
