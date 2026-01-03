import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llws")
export default class LlwController {
  @operation({
    summary: "Get Llws",
  })
  @get()
  static getLlws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Llw",
  })
  @post("{id}")
  static createLlw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
