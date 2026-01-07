import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljv")
export default class LjvController {
  @operation({
    summary: "Get Ljv",
  })
  @get()
  static getLjv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ljv",
  })
  @post("{id}")
  static createLjv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
