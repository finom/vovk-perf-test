import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljg")
export default class LjgController {
  @operation({
    summary: "Get Ljg",
  })
  @get()
  static getLjg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ljg",
  })
  @post("{id}")
  static createLjg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
