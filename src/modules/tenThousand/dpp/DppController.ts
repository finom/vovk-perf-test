import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpps")
export default class DppController {
  @operation({
    summary: "Get Dpps",
  })
  @get()
  static getDpps = procedure({
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
