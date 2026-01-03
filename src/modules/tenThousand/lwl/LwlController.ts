import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwls")
export default class LwlController {
  @operation({
    summary: "Get Lwls",
  })
  @get()
  static getLwls = procedure({
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
