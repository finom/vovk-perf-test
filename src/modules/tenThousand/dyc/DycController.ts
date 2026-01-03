import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dycs")
export default class DycController {
  @operation({
    summary: "Get Dycs",
  })
  @get()
  static getDycs = procedure({
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
