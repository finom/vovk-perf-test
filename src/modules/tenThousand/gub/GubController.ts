import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gubs")
export default class GubController {
  @operation({
    summary: "Get Gubs",
  })
  @get()
  static getGubs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gub",
  })
  @post("{id}")
  static createGub = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
