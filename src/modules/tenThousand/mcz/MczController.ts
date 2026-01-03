import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mczs")
export default class MczController {
  @operation({
    summary: "Get Mczs",
  })
  @get()
  static getMczs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mcz",
  })
  @post("{id}")
  static createMcz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
