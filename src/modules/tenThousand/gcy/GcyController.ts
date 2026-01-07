import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcy")
export default class GcyController {
  @operation({
    summary: "Get Gcy",
  })
  @get()
  static getGcy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gcy",
  })
  @post("{id}")
  static createGcy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
