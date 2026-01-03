import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnies")
export default class HnyController {
  @operation({
    summary: "Get Hnies",
  })
  @get()
  static getHnies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hny",
  })
  @post("{id}")
  static createHny = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
