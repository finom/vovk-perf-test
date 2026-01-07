import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltr")
export default class LtrController {
  @operation({
    summary: "Get Ltr",
  })
  @get()
  static getLtr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ltr",
  })
  @post("{id}")
  static createLtr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
