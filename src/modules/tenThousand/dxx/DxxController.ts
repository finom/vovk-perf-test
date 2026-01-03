import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxxes")
export default class DxxController {
  @operation({
    summary: "Get Dxxes",
  })
  @get()
  static getDxxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxx",
  })
  @post("{id}")
  static createDxx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
