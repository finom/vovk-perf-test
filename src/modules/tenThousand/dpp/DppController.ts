import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpp")
export default class DppController {
  @operation({
    summary: "Get Dpp",
  })
  @get()
  static getDpp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpp",
  })
  @post("{id}")
  static createDpp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
