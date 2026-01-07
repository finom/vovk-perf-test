import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpy")
export default class GpyController {
  @operation({
    summary: "Get Gpy",
  })
  @get()
  static getGpy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpy",
  })
  @post("{id}")
  static createGpy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
