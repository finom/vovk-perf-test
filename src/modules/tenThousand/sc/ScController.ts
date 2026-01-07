import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sc")
export default class ScController {
  @operation({
    summary: "Get Sc",
  })
  @get()
  static getSc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sc",
  })
  @post("{id}")
  static createSc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
