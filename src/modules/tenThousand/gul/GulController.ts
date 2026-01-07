import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gul")
export default class GulController {
  @operation({
    summary: "Get Gul",
  })
  @get()
  static getGul = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gul",
  })
  @post("{id}")
  static createGul = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
