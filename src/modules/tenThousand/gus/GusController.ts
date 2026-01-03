import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guses")
export default class GusController {
  @operation({
    summary: "Get Guses",
  })
  @get()
  static getGuses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gus",
  })
  @post("{id}")
  static createGus = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
