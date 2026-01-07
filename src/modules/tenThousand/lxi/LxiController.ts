import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxi")
export default class LxiController {
  @operation({
    summary: "Get Lxi",
  })
  @get()
  static getLxi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxi",
  })
  @post("{id}")
  static createLxi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
