import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhr")
export default class DhrController {
  @operation({
    summary: "Get Dhr",
  })
  @get()
  static getDhr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhr",
  })
  @post("{id}")
  static createDhr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
