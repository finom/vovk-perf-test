import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfk")
export default class LfkController {
  @operation({
    summary: "Get Lfk",
  })
  @get()
  static getLfk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfk",
  })
  @post("{id}")
  static createLfk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
