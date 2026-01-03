import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljzs")
export default class LjzController {
  @operation({
    summary: "Get Ljzs",
  })
  @get()
  static getLjzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ljz",
  })
  @post("{id}")
  static createLjz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
