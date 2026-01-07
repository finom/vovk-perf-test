import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djn")
export default class DjnController {
  @operation({
    summary: "Get Djn",
  })
  @get()
  static getDjn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Djn",
  })
  @post("{id}")
  static createDjn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
