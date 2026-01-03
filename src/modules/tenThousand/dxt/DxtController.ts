import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxts")
export default class DxtController {
  @operation({
    summary: "Get Dxts",
  })
  @get()
  static getDxts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dxt",
  })
  @post("{id}")
  static createDxt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
