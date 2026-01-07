import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blv")
export default class BlvController {
  @operation({
    summary: "Get Blv",
  })
  @get()
  static getBlv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Blv",
  })
  @post("{id}")
  static createBlv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
