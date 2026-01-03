import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coos")
export default class CooController {
  @operation({
    summary: "Get Coos",
  })
  @get()
  static getCoos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Coo",
  })
  @post("{id}")
  static createCoo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
