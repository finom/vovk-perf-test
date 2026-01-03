import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mts")
export default class MtsController {
  @operation({
    summary: "Get Mts",
  })
  @get()
  static getMts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mts",
  })
  @post("{id}")
  static createMts = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
