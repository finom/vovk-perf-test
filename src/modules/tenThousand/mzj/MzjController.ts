import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzjs")
export default class MzjController {
  @operation({
    summary: "Get Mzjs",
  })
  @get()
  static getMzjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzj",
  })
  @post("{id}")
  static createMzj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
