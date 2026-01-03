import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbs")
export default class GbController {
  @operation({
    summary: "Get Gbs",
  })
  @get()
  static getGbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gb",
  })
  @post("{id}")
  static createGb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
