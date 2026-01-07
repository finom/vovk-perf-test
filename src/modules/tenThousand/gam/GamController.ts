import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gam")
export default class GamController {
  @operation({
    summary: "Get Gam",
  })
  @get()
  static getGam = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gam",
  })
  @post("{id}")
  static createGam = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
