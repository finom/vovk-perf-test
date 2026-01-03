import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrts")
export default class MrtController {
  @operation({
    summary: "Get Mrts",
  })
  @get()
  static getMrts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mrt",
  })
  @post("{id}")
  static createMrt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
