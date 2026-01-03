import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgds")
export default class FgdController {
  @operation({
    summary: "Get Fgds",
  })
  @get()
  static getFgds = procedure({
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
