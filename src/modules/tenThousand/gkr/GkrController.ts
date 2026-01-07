import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkr")
export default class GkrController {
  @operation({
    summary: "Get Gkr",
  })
  @get()
  static getGkr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkr",
  })
  @post("{id}")
  static createGkr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
