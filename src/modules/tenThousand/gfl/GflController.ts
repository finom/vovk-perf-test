import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfl")
export default class GflController {
  @operation({
    summary: "Get Gfl",
  })
  @get()
  static getGfl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfl",
  })
  @post("{id}")
  static createGfl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
