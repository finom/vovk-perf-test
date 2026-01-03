import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grgs")
export default class GrgController {
  @operation({
    summary: "Get Grgs",
  })
  @get()
  static getGrgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grg",
  })
  @post("{id}")
  static createGrg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
