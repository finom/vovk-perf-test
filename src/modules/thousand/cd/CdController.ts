import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cd")
export default class CdController {
  @operation({
    summary: "Get Cd",
  })
  @get()
  static getCd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cd",
  })
  @post("{id}")
  static createCd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
