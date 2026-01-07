import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fy")
export default class FyController {
  @operation({
    summary: "Get Fy",
  })
  @get()
  static getFy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fy",
  })
  @post("{id}")
  static createFy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
