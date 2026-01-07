import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fat")
export default class FatController {
  @operation({
    summary: "Get Fat",
  })
  @get()
  static getFat = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fat",
  })
  @post("{id}")
  static createFat = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
