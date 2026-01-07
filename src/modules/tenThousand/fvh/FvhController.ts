import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvh")
export default class FvhController {
  @operation({
    summary: "Get Fvh",
  })
  @get()
  static getFvh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvh",
  })
  @post("{id}")
  static createFvh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
