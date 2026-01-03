import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzts")
export default class GztController {
  @operation({
    summary: "Get Gzts",
  })
  @get()
  static getGzts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzt",
  })
  @post("{id}")
  static createGzt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
