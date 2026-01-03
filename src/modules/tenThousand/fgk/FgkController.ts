import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgks")
export default class FgkController {
  @operation({
    summary: "Get Fgks",
  })
  @get()
  static getFgks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgk",
  })
  @post("{id}")
  static createFgk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
