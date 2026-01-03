import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djds")
export default class DjdController {
  @operation({
    summary: "Get Djds",
  })
  @get()
  static getDjds = procedure({
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
