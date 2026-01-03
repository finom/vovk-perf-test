import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffus")
export default class FfuController {
  @operation({
    summary: "Get Ffus",
  })
  @get()
  static getFfus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffu",
  })
  @post("{id}")
  static createFfu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
