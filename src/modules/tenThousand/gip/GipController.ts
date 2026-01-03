import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gips")
export default class GipController {
  @operation({
    summary: "Get Gips",
  })
  @get()
  static getGips = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gip",
  })
  @post("{id}")
  static createGip = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
