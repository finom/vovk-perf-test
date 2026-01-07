import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbo")
export default class FboController {
  @operation({
    summary: "Get Fbo",
  })
  @get()
  static getFbo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbo",
  })
  @post("{id}")
  static createFbo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
