import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgg")
export default class LggController {
  @operation({
    summary: "Get Lgg",
  })
  @get()
  static getLgg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgg",
  })
  @post("{id}")
  static createLgg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
