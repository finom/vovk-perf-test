import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmjs")
export default class BmjController {
  @operation({
    summary: "Get Bmjs",
  })
  @get()
  static getBmjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bmj",
  })
  @post("{id}")
  static createBmj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
