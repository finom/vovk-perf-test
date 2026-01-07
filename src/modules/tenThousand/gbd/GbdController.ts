import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbd")
export default class GbdController {
  @operation({
    summary: "Get Gbd",
  })
  @get()
  static getGbd = procedure({
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
