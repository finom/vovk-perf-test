import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lay")
export default class LayController {
  @operation({
    summary: "Get Lay",
  })
  @get()
  static getLay = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lay",
  })
  @post("{id}")
  static createLay = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
