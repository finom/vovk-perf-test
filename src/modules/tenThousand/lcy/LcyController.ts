import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcy")
export default class LcyController {
  @operation({
    summary: "Get Lcy",
  })
  @get()
  static getLcy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lcy",
  })
  @post("{id}")
  static createLcy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
