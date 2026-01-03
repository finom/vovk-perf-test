import { procedure, prefix, get, post, operation } from "vovk";

@prefix("boos")
export default class BooController {
  @operation({
    summary: "Get Boos",
  })
  @get()
  static getBoos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Boo",
  })
  @post("{id}")
  static createBoo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
