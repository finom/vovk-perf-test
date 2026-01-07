import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gl")
export default class GlController {
  @operation({
    summary: "Get Gl",
  })
  @get()
  static getGl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gl",
  })
  @post("{id}")
  static createGl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
