import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbds")
export default class GbdController {
  @operation({
    summary: "Get Gbds",
  })
  @get()
  static getGbds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbd",
  })
  @post("{id}")
  static createGbd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
