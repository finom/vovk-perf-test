import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsgs")
export default class BsgController {
  @operation({
    summary: "Get Bsgs",
  })
  @get()
  static getBsgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsg",
  })
  @post("{id}")
  static createBsg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
