import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlws")
export default class MlwController {
  @operation({
    summary: "Get Mlws",
  })
  @get()
  static getMlws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mlw",
  })
  @post("{id}")
  static createMlw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
