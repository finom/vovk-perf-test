import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyr")
export default class LyrController {
  @operation({
    summary: "Get Lyr",
  })
  @get()
  static getLyr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyr",
  })
  @post("{id}")
  static createLyr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
