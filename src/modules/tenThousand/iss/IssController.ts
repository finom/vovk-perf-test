import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isses")
export default class IssController {
  @operation({
    summary: "Get Isses",
  })
  @get()
  static getIsses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iss",
  })
  @post("{id}")
  static createIss = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
