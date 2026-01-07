import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fig")
export default class FigController {
  @operation({
    summary: "Get Fig",
  })
  @get()
  static getFig = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fig",
  })
  @post("{id}")
  static createFig = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
