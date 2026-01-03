import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnks")
export default class GnkController {
  @operation({
    summary: "Get Gnks",
  })
  @get()
  static getGnks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gnk",
  })
  @post("{id}")
  static createGnk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
