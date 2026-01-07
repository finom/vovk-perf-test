import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lak")
export default class LakController {
  @operation({
    summary: "Get Lak",
  })
  @get()
  static getLak = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lak",
  })
  @post("{id}")
  static createLak = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
