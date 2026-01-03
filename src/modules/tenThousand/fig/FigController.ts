import { procedure, prefix, get, post, operation } from "vovk";

@prefix("figs")
export default class FigController {
  @operation({
    summary: "Get Figs",
  })
  @get()
  static getFigs = procedure({
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
