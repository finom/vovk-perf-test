import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwl")
export default class LwlController {
  @operation({
    summary: "Get Lwl",
  })
  @get()
  static getLwl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwl",
  })
  @post("{id}")
  static createLwl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
