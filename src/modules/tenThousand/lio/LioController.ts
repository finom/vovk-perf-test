import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lio")
export default class LioController {
  @operation({
    summary: "Get Lio",
  })
  @get()
  static getLio = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lio",
  })
  @post("{id}")
  static createLio = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
