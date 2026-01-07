import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grb")
export default class GrbController {
  @operation({
    summary: "Get Grb",
  })
  @get()
  static getGrb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grb",
  })
  @post("{id}")
  static createGrb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
