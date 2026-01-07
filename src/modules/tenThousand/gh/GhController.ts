import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gh")
export default class GhController {
  @operation({
    summary: "Get Gh",
  })
  @get()
  static getGh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gh",
  })
  @post("{id}")
  static createGh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
