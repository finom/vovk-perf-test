import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvu")
export default class GvuController {
  @operation({
    summary: "Get Gvu",
  })
  @get()
  static getGvu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvu",
  })
  @post("{id}")
  static createGvu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
