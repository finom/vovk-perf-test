import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlm")
export default class MlmController {
  @operation({
    summary: "Get Mlm",
  })
  @get()
  static getMlm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mlm",
  })
  @post("{id}")
  static createMlm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
