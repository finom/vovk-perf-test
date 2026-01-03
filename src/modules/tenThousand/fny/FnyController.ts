import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnies")
export default class FnyController {
  @operation({
    summary: "Get Fnies",
  })
  @get()
  static getFnies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fny",
  })
  @post("{id}")
  static createFny = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
