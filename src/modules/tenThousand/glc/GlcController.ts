import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glc")
export default class GlcController {
  @operation({
    summary: "Get Glc",
  })
  @get()
  static getGlc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Glc",
  })
  @post("{id}")
  static createGlc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
