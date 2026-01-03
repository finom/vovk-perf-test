import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgfs")
export default class FgfController {
  @operation({
    summary: "Get Fgfs",
  })
  @get()
  static getFgfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgf",
  })
  @post("{id}")
  static createFgf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
