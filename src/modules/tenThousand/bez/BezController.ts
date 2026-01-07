import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bez")
export default class BezController {
  @operation({
    summary: "Get Bez",
  })
  @get()
  static getBez = procedure({
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
