import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkls")
export default class BklController {
  @operation({
    summary: "Get Bkls",
  })
  @get()
  static getBkls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bkl",
  })
  @post("{id}")
  static createBkl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
