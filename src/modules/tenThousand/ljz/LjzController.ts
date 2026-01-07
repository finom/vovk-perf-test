import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljz")
export default class LjzController {
  @operation({
    summary: "Get Ljz",
  })
  @get()
  static getLjz = procedure({
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
