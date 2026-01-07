import { procedure, prefix, get, post, operation } from "vovk";

@prefix("giz")
export default class GizController {
  @operation({
    summary: "Get Giz",
  })
  @get()
  static getGiz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Giz",
  })
  @post("{id}")
  static createGiz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
