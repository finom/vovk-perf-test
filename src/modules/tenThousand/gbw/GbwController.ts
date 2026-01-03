import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbws")
export default class GbwController {
  @operation({
    summary: "Get Gbws",
  })
  @get()
  static getGbws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbw",
  })
  @post("{id}")
  static createGbw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
