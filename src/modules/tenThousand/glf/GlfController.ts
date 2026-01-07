import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glf")
export default class GlfController {
  @operation({
    summary: "Get Glf",
  })
  @get()
  static getGlf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Glf",
  })
  @post("{id}")
  static createGlf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
