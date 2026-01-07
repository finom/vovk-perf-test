import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbk")
export default class FbkController {
  @operation({
    summary: "Get Fbk",
  })
  @get()
  static getFbk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbk",
  })
  @post("{id}")
  static createFbk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
