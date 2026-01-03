import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llxes")
export default class LlxController {
  @operation({
    summary: "Get Llxes",
  })
  @get()
  static getLlxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Llx",
  })
  @post("{id}")
  static createLlx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
