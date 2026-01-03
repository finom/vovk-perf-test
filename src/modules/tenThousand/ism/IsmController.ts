import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isms")
export default class IsmController {
  @operation({
    summary: "Get Isms",
  })
  @get()
  static getIsms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ism",
  })
  @post("{id}")
  static createIsm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
