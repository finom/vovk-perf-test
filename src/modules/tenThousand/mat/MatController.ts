import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mats")
export default class MatController {
  @operation({
    summary: "Get Mats",
  })
  @get()
  static getMats = procedure({
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
