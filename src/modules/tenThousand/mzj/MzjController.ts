import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzj")
export default class MzjController {
  @operation({
    summary: "Get Mzj",
  })
  @get()
  static getMzj = procedure({
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
