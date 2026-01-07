import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llv")
export default class LlvController {
  @operation({
    summary: "Get Llv",
  })
  @get()
  static getLlv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Llv",
  })
  @post("{id}")
  static createLlv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
