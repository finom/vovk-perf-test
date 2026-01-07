import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjg")
export default class HjgController {
  @operation({
    summary: "Get Hjg",
  })
  @get()
  static getHjg = procedure({
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
