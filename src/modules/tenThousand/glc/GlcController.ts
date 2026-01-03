import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glcs")
export default class GlcController {
  @operation({
    summary: "Get Glcs",
  })
  @get()
  static getGlcs = procedure({
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
