import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlv")
export default class MlvController {
  @operation({
    summary: "Get Mlv",
  })
  @get()
  static getMlv = procedure({
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
