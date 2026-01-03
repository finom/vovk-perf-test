import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mts")
export default class MtController {
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
    summary: "Create Mt",
  })
  @post("{id}")
  static createMt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
