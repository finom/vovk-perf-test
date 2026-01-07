import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gom")
export default class GomController {
  @operation({
    summary: "Get Gom",
  })
  @get()
  static getGom = procedure({
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
