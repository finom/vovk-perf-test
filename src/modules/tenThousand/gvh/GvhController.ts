import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvh")
export default class GvhController {
  @operation({
    summary: "Get Gvh",
  })
  @get()
  static getGvh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvh",
  })
  @post("{id}")
  static createGvh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
