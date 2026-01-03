import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dts")
export default class DtsController {
  @operation({
    summary: "Get Dts",
  })
  @get()
  static getDts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dts",
  })
  @post("{id}")
  static createDts = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
