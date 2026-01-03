import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffjs")
export default class FfjController {
  @operation({
    summary: "Get Ffjs",
  })
  @get()
  static getFfjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffj",
  })
  @post("{id}")
  static createFfj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
