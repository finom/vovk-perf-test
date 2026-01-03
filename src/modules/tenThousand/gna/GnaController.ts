import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnas")
export default class GnaController {
  @operation({
    summary: "Get Gnas",
  })
  @get()
  static getGnas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gna",
  })
  @post("{id}")
  static createGna = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
