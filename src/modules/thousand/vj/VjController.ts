import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vjs")
export default class VjController {
  @operation({
    summary: "Get Vjs",
  })
  @get()
  static getVjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vj",
  })
  @post("{id}")
  static createVj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
