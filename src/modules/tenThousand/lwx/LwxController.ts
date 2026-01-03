import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwxes")
export default class LwxController {
  @operation({
    summary: "Get Lwxes",
  })
  @get()
  static getLwxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwx",
  })
  @post("{id}")
  static createLwx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
