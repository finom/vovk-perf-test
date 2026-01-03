import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btzs")
export default class BtzController {
  @operation({
    summary: "Get Btzs",
  })
  @get()
  static getBtzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Btz",
  })
  @post("{id}")
  static createBtz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
