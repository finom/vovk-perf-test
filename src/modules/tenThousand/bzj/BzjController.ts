import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzjs")
export default class BzjController {
  @operation({
    summary: "Get Bzjs",
  })
  @get()
  static getBzjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzj",
  })
  @post("{id}")
  static createBzj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
