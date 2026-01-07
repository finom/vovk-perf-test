import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxk")
export default class MxkController {
  @operation({
    summary: "Get Mxk",
  })
  @get()
  static getMxk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxk",
  })
  @post("{id}")
  static createMxk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
