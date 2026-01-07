import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bad")
export default class BadController {
  @operation({
    summary: "Get Bad",
  })
  @get()
  static getBad = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bad",
  })
  @post("{id}")
  static createBad = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
