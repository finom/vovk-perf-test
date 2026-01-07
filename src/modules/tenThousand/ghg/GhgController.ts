import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghg")
export default class GhgController {
  @operation({
    summary: "Get Ghg",
  })
  @get()
  static getGhg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghg",
  })
  @post("{id}")
  static createGhg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
