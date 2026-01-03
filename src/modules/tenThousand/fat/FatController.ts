import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fats")
export default class FatController {
  @operation({
    summary: "Get Fats",
  })
  @get()
  static getFats = procedure({
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
