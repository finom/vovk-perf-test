import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuf")
export default class FufController {
  @operation({
    summary: "Get Fuf",
  })
  @get()
  static getFuf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fuf",
  })
  @post("{id}")
  static createFuf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
