import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftw")
export default class FtwController {
  @operation({
    summary: "Get Ftw",
  })
  @get()
  static getFtw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ftw",
  })
  @post("{id}")
  static createFtw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
