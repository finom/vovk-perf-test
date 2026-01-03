import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dems")
export default class DemController {
  @operation({
    summary: "Get Dems",
  })
  @get()
  static getDems = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dem",
  })
  @post("{id}")
  static createDem = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
