import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltzs")
export default class LtzController {
  @operation({
    summary: "Get Ltzs",
  })
  @get()
  static getLtzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ltz",
  })
  @post("{id}")
  static createLtz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
