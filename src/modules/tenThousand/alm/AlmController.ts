import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alms")
export default class AlmController {
  @operation({
    summary: "Get Alms",
  })
  @get()
  static getAlms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Alm",
  })
  @post("{id}")
  static createAlm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
