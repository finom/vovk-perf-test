import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbos")
export default class FboController {
  @operation({
    summary: "Get Fbos",
  })
  @get()
  static getFbos = procedure({
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
