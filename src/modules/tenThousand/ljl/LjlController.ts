import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljl")
export default class LjlController {
  @operation({
    summary: "Get Ljl",
  })
  @get()
  static getLjl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ljl",
  })
  @post("{id}")
  static createLjl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
