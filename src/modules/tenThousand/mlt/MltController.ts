import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlts")
export default class MltController {
  @operation({
    summary: "Get Mlts",
  })
  @get()
  static getMlts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mlt",
  })
  @post("{id}")
  static createMlt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
