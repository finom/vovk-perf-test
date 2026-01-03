import { procedure, prefix, get, post, operation } from "vovk";

@prefix("goms")
export default class GomController {
  @operation({
    summary: "Get Goms",
  })
  @get()
  static getGoms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gom",
  })
  @post("{id}")
  static createGom = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
