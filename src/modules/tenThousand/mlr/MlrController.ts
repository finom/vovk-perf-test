import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlrs")
export default class MlrController {
  @operation({
    summary: "Get Mlrs",
  })
  @get()
  static getMlrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mlr",
  })
  @post("{id}")
  static createMlr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
