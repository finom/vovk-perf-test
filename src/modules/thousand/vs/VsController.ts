import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vs")
export default class VsController {
  @operation({
    summary: "Get Vs",
  })
  @get()
  static getVs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vs",
  })
  @post("{id}")
  static createVs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
