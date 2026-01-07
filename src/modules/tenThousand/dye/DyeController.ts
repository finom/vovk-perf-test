import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dye")
export default class DyeController {
  @operation({
    summary: "Get Dye",
  })
  @get()
  static getDye = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dye",
  })
  @post("{id}")
  static createDye = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
