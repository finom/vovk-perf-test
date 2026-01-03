import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmps")
export default class BmpController {
  @operation({
    summary: "Get Bmps",
  })
  @get()
  static getBmps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bmp",
  })
  @post("{id}")
  static createBmp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
