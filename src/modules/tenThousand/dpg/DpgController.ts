import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpg")
export default class DpgController {
  @operation({
    summary: "Get Dpg",
  })
  @get()
  static getDpg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpg",
  })
  @post("{id}")
  static createDpg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
