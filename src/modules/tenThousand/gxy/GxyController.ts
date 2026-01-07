import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxy")
export default class GxyController {
  @operation({
    summary: "Get Gxy",
  })
  @get()
  static getGxy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxy",
  })
  @post("{id}")
  static createGxy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
