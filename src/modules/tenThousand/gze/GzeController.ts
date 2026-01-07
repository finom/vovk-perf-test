import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gze")
export default class GzeController {
  @operation({
    summary: "Get Gze",
  })
  @get()
  static getGze = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gze",
  })
  @post("{id}")
  static createGze = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
