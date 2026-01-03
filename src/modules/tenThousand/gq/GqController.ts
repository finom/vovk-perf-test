import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqs")
export default class GqController {
  @operation({
    summary: "Get Gqs",
  })
  @get()
  static getGqs = procedure({
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
