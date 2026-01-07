import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddr")
export default class DdrController {
  @operation({
    summary: "Get Ddr",
  })
  @get()
  static getDdr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddr",
  })
  @post("{id}")
  static createDdr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
