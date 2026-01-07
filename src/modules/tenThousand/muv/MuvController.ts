import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muv")
export default class MuvController {
  @operation({
    summary: "Get Muv",
  })
  @get()
  static getMuv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Muv",
  })
  @post("{id}")
  static createMuv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
