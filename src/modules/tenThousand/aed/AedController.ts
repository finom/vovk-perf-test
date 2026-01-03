import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aeds")
export default class AedController {
  @operation({
    summary: "Get Aeds",
  })
  @get()
  static getAeds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aed",
  })
  @post("{id}")
  static createAed = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
