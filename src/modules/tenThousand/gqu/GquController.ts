import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqu")
export default class GquController {
  @operation({
    summary: "Get Gqu",
  })
  @get()
  static getGqu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqu",
  })
  @post("{id}")
  static createGqu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
