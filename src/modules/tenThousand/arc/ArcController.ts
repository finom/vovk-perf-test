import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arcs")
export default class ArcController {
  @operation({
    summary: "Get Arcs",
  })
  @get()
  static getArcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Arc",
  })
  @post("{id}")
  static createArc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
