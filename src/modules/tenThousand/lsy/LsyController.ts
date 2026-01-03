import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsies")
export default class LsyController {
  @operation({
    summary: "Get Lsies",
  })
  @get()
  static getLsies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsy",
  })
  @post("{id}")
  static createLsy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
