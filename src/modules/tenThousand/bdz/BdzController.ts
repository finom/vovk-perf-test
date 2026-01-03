import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdzs")
export default class BdzController {
  @operation({
    summary: "Get Bdzs",
  })
  @get()
  static getBdzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdz",
  })
  @post("{id}")
  static createBdz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
