import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llq")
export default class LlqController {
  @operation({
    summary: "Get Llq",
  })
  @get()
  static getLlq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Llq",
  })
  @post("{id}")
  static createLlq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
