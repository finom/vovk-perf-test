import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mls")
export default class MlsController {
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
    summary: "Create Mls",
  })
  @post("{id}")
  static createMls = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
