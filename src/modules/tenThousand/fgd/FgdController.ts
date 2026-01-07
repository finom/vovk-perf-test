import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgd")
export default class FgdController {
  @operation({
    summary: "Get Fgd",
  })
  @get()
  static getFgd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgd",
  })
  @post("{id}")
  static createFgd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
