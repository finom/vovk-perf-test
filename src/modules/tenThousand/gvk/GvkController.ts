import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvk")
export default class GvkController {
  @operation({
    summary: "Get Gvk",
  })
  @get()
  static getGvk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvk",
  })
  @post("{id}")
  static createGvk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
