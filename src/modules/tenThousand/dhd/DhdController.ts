import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhds")
export default class DhdController {
  @operation({
    summary: "Get Dhds",
  })
  @get()
  static getDhds = procedure({
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
