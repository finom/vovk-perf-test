import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gku")
export default class GkuController {
  @operation({
    summary: "Get Gku",
  })
  @get()
  static getGku = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gku",
  })
  @post("{id}")
  static createGku = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
