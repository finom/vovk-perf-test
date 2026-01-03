import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjgs")
export default class HjgController {
  @operation({
    summary: "Get Hjgs",
  })
  @get()
  static getHjgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjg",
  })
  @post("{id}")
  static createHjg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
