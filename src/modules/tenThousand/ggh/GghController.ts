import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggh")
export default class GghController {
  @operation({
    summary: "Get Ggh",
  })
  @get()
  static getGgh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggh",
  })
  @post("{id}")
  static createGgh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
