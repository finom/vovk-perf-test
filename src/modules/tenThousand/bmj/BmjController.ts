import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmj")
export default class BmjController {
  @operation({
    summary: "Get Bmj",
  })
  @get()
  static getBmj = procedure({
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
