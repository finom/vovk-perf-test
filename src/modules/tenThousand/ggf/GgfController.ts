import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggfs")
export default class GgfController {
  @operation({
    summary: "Get Ggfs",
  })
  @get()
  static getGgfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggf",
  })
  @post("{id}")
  static createGgf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
