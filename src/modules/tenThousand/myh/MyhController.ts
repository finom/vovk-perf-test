import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myhs")
export default class MyhController {
  @operation({
    summary: "Get Myhs",
  })
  @get()
  static getMyhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myh",
  })
  @post("{id}")
  static createMyh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
