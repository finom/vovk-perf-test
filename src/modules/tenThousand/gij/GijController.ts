import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gij")
export default class GijController {
  @operation({
    summary: "Get Gij",
  })
  @get()
  static getGij = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gij",
  })
  @post("{id}")
  static createGij = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
