import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djcs")
export default class DjcController {
  @operation({
    summary: "Get Djcs",
  })
  @get()
  static getDjcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Djc",
  })
  @post("{id}")
  static createDjc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
