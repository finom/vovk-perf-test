import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlvs")
export default class MlvController {
  @operation({
    summary: "Get Mlvs",
  })
  @get()
  static getMlvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mlv",
  })
  @post("{id}")
  static createMlv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
