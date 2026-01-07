import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mat")
export default class MatController {
  @operation({
    summary: "Get Mat",
  })
  @get()
  static getMat = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mat",
  })
  @post("{id}")
  static createMat = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
