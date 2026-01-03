import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrjs")
export default class LrjController {
  @operation({
    summary: "Get Lrjs",
  })
  @get()
  static getLrjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lrj",
  })
  @post("{id}")
  static createLrj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
