import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfls")
export default class MflController {
  @operation({
    summary: "Get Mfls",
  })
  @get()
  static getMfls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfl",
  })
  @post("{id}")
  static createMfl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
