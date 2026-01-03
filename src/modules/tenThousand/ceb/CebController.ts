import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cebs")
export default class CebController {
  @operation({
    summary: "Get Cebs",
  })
  @get()
  static getCebs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ceb",
  })
  @post("{id}")
  static createCeb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
