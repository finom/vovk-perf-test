import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrw")
export default class LrwController {
  @operation({
    summary: "Get Lrw",
  })
  @get()
  static getLrw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lrw",
  })
  @post("{id}")
  static createLrw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
