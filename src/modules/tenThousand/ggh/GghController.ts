import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gghs")
export default class GghController {
  @operation({
    summary: "Get Gghs",
  })
  @get()
  static getGghs = procedure({
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
