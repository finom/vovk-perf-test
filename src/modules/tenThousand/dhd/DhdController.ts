import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhd")
export default class DhdController {
  @operation({
    summary: "Get Dhd",
  })
  @get()
  static getDhd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhd",
  })
  @post("{id}")
  static createDhd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
