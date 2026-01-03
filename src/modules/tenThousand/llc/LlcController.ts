import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llcs")
export default class LlcController {
  @operation({
    summary: "Get Llcs",
  })
  @get()
  static getLlcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Llc",
  })
  @post("{id}")
  static createLlc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
