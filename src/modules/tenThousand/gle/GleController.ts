import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gles")
export default class GleController {
  @operation({
    summary: "Get Gles",
  })
  @get()
  static getGles = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gle",
  })
  @post("{id}")
  static createGle = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
