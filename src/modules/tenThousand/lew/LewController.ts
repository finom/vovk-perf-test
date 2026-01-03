import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lews")
export default class LewController {
  @operation({
    summary: "Get Lews",
  })
  @get()
  static getLews = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lew",
  })
  @post("{id}")
  static createLew = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
