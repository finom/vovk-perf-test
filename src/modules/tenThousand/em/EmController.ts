import { procedure, prefix, get, post, operation } from "vovk";

@prefix("em")
export default class EmController {
  @operation({
    summary: "Get Em",
  })
  @get()
  static getEm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Em",
  })
  @post("{id}")
  static createEm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
