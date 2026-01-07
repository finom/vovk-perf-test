import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsc")
export default class GscController {
  @operation({
    summary: "Get Gsc",
  })
  @get()
  static getGsc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsc",
  })
  @post("{id}")
  static createGsc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
