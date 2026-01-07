import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxk")
export default class CxkController {
  @operation({
    summary: "Get Cxk",
  })
  @get()
  static getCxk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxk",
  })
  @post("{id}")
  static createCxk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
