import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmp")
export default class LmpController {
  @operation({
    summary: "Get Lmp",
  })
  @get()
  static getLmp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmp",
  })
  @post("{id}")
  static createLmp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
