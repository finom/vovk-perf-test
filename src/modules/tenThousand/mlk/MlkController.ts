import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlks")
export default class MlkController {
  @operation({
    summary: "Get Mlks",
  })
  @get()
  static getMlks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mlk",
  })
  @post("{id}")
  static createMlk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
