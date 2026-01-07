import { procedure, prefix, get, post, operation } from "vovk";

@prefix("liz")
export default class LizController {
  @operation({
    summary: "Get Liz",
  })
  @get()
  static getLiz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Liz",
  })
  @post("{id}")
  static createLiz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
