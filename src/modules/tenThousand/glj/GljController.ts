import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gljs")
export default class GljController {
  @operation({
    summary: "Get Gljs",
  })
  @get()
  static getGljs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Glj",
  })
  @post("{id}")
  static createGlj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
