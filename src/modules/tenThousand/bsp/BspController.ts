import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsps")
export default class BspController {
  @operation({
    summary: "Get Bsps",
  })
  @get()
  static getBsps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsp",
  })
  @post("{id}")
  static createBsp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
