import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glt")
export default class GltController {
  @operation({
    summary: "Get Glt",
  })
  @get()
  static getGlt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Glt",
  })
  @post("{id}")
  static createGlt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
