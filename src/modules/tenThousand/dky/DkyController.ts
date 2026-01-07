import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dky")
export default class DkyController {
  @operation({
    summary: "Get Dky",
  })
  @get()
  static getDky = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dky",
  })
  @post("{id}")
  static createDky = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
