import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mls")
export default class MlController {
  @operation({
    summary: "Get Mls",
  })
  @get()
  static getMls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ml",
  })
  @post("{id}")
  static createMl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
