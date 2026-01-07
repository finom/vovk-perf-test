import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llc")
export default class LlcController {
  @operation({
    summary: "Get Llc",
  })
  @get()
  static getLlc = procedure({
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
