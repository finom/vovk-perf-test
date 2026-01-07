import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duf")
export default class DufController {
  @operation({
    summary: "Get Duf",
  })
  @get()
  static getDuf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Duf",
  })
  @post("{id}")
  static createDuf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
