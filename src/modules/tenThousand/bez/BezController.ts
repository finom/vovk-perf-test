import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bezs")
export default class BezController {
  @operation({
    summary: "Get Bezs",
  })
  @get()
  static getBezs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bez",
  })
  @post("{id}")
  static createBez = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
