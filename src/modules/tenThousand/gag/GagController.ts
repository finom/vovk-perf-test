import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gag")
export default class GagController {
  @operation({
    summary: "Get Gag",
  })
  @get()
  static getGag = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gag",
  })
  @post("{id}")
  static createGag = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
