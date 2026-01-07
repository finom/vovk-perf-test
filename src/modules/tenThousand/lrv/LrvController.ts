import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrv")
export default class LrvController {
  @operation({
    summary: "Get Lrv",
  })
  @get()
  static getLrv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lrv",
  })
  @post("{id}")
  static createLrv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
