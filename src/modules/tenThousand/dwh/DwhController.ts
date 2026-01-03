import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwhs")
export default class DwhController {
  @operation({
    summary: "Get Dwhs",
  })
  @get()
  static getDwhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwh",
  })
  @post("{id}")
  static createDwh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
