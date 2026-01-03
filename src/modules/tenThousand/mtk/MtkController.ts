import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtks")
export default class MtkController {
  @operation({
    summary: "Get Mtks",
  })
  @get()
  static getMtks = procedure({
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
