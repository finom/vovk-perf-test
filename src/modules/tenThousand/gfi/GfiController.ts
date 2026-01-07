import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfi")
export default class GfiController {
  @operation({
    summary: "Get Gfi",
  })
  @get()
  static getGfi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfi",
  })
  @post("{id}")
  static createGfi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
