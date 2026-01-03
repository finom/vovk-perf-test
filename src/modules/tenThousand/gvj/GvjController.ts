import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvjs")
export default class GvjController {
  @operation({
    summary: "Get Gvjs",
  })
  @get()
  static getGvjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvj",
  })
  @post("{id}")
  static createGvj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
