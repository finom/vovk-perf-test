import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lds")
export default class LdsController {
  @operation({
    summary: "Get Lds",
  })
  @get()
  static getLds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lds",
  })
  @post("{id}")
  static createLds = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
