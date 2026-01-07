import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgp")
export default class FgpController {
  @operation({
    summary: "Get Fgp",
  })
  @get()
  static getFgp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgp",
  })
  @post("{id}")
  static createFgp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
