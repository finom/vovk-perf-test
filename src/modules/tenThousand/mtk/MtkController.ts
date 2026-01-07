import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtk")
export default class MtkController {
  @operation({
    summary: "Get Mtk",
  })
  @get()
  static getMtk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mtk",
  })
  @post("{id}")
  static createMtk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
