import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dips")
export default class DipController {
  @operation({
    summary: "Get Dips",
  })
  @get()
  static getDips = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dip",
  })
  @post("{id}")
  static createDip = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
