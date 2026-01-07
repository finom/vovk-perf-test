import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gik")
export default class GikController {
  @operation({
    summary: "Get Gik",
  })
  @get()
  static getGik = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gik",
  })
  @post("{id}")
  static createGik = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
