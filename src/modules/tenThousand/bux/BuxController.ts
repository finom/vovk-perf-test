import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bux")
export default class BuxController {
  @operation({
    summary: "Get Bux",
  })
  @get()
  static getBux = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bux",
  })
  @post("{id}")
  static createBux = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
