import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmhs")
export default class BmhController {
  @operation({
    summary: "Get Bmhs",
  })
  @get()
  static getBmhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bmh",
  })
  @post("{id}")
  static createBmh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
