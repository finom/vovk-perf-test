import { procedure, prefix, get, post, operation } from "vovk";

@prefix("loj")
export default class LojController {
  @operation({
    summary: "Get Loj",
  })
  @get()
  static getLoj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Loj",
  })
  @post("{id}")
  static createLoj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
