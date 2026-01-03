import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcjs")
export default class McjController {
  @operation({
    summary: "Get Mcjs",
  })
  @get()
  static getMcjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mcj",
  })
  @post("{id}")
  static createMcj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
