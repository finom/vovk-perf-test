import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwies")
export default class DwyController {
  @operation({
    summary: "Get Dwies",
  })
  @get()
  static getDwies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwy",
  })
  @post("{id}")
  static createDwy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
