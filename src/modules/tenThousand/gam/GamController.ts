import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gams")
export default class GamController {
  @operation({
    summary: "Get Gams",
  })
  @get()
  static getGams = procedure({
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
