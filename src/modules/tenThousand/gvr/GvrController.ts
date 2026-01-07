import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvr")
export default class GvrController {
  @operation({
    summary: "Get Gvr",
  })
  @get()
  static getGvr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvr",
  })
  @post("{id}")
  static createGvr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
