import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlzs")
export default class MlzController {
  @operation({
    summary: "Get Mlzs",
  })
  @get()
  static getMlzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mlz",
  })
  @post("{id}")
  static createMlz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
