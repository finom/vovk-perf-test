import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgn")
export default class FgnController {
  @operation({
    summary: "Get Fgn",
  })
  @get()
  static getFgn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgn",
  })
  @post("{id}")
  static createFgn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
