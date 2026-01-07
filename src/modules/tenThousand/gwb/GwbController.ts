import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwb")
export default class GwbController {
  @operation({
    summary: "Get Gwb",
  })
  @get()
  static getGwb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwb",
  })
  @post("{id}")
  static createGwb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
