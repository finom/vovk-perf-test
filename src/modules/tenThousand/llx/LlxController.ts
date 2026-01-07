import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llx")
export default class LlxController {
  @operation({
    summary: "Get Llx",
  })
  @get()
  static getLlx = procedure({
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
