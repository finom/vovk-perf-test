import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmks")
export default class BmkController {
  @operation({
    summary: "Get Bmks",
  })
  @get()
  static getBmks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bmk",
  })
  @post("{id}")
  static createBmk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
