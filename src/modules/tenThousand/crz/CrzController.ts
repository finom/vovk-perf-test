import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crzs")
export default class CrzController {
  @operation({
    summary: "Get Crzs",
  })
  @get()
  static getCrzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Crz",
  })
  @post("{id}")
  static createCrz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
