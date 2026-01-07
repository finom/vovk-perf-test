import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gq")
export default class GqController {
  @operation({
    summary: "Get Gq",
  })
  @get()
  static getGq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gq",
  })
  @post("{id}")
  static createGq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
