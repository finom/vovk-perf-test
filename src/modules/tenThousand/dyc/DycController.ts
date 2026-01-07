import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyc")
export default class DycController {
  @operation({
    summary: "Get Dyc",
  })
  @get()
  static getDyc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyc",
  })
  @post("{id}")
  static createDyc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
