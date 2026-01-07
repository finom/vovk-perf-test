import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djd")
export default class DjdController {
  @operation({
    summary: "Get Djd",
  })
  @get()
  static getDjd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Djd",
  })
  @post("{id}")
  static createDjd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
