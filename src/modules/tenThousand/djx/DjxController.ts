import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djx")
export default class DjxController {
  @operation({
    summary: "Get Djx",
  })
  @get()
  static getDjx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Djx",
  })
  @post("{id}")
  static createDjx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
