import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gus")
export default class GuController {
  @operation({
    summary: "Get Gus",
  })
  @get()
  static getGus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gu",
  })
  @post("{id}")
  static createGu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
