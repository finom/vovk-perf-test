import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lets")
export default class LetController {
  @operation({
    summary: "Get Lets",
  })
  @get()
  static getLets = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Let",
  })
  @post("{id}")
  static createLet = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
