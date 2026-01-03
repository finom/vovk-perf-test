import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxts")
export default class MxtController {
  @operation({
    summary: "Get Mxts",
  })
  @get()
  static getMxts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxt",
  })
  @post("{id}")
  static createMxt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
