import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gons")
export default class GonController {
  @operation({
    summary: "Get Gons",
  })
  @get()
  static getGons = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gon",
  })
  @post("{id}")
  static createGon = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
