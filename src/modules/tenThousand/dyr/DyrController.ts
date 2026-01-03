import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyrs")
export default class DyrController {
  @operation({
    summary: "Get Dyrs",
  })
  @get()
  static getDyrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyr",
  })
  @post("{id}")
  static createDyr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
