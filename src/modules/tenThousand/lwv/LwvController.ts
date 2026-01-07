import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwv")
export default class LwvController {
  @operation({
    summary: "Get Lwv",
  })
  @get()
  static getLwv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwv",
  })
  @post("{id}")
  static createLwv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
