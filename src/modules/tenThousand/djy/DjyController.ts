import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djies")
export default class DjyController {
  @operation({
    summary: "Get Djies",
  })
  @get()
  static getDjies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Djy",
  })
  @post("{id}")
  static createDjy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
