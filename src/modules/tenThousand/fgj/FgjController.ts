import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgjs")
export default class FgjController {
  @operation({
    summary: "Get Fgjs",
  })
  @get()
  static getFgjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgj",
  })
  @post("{id}")
  static createFgj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
