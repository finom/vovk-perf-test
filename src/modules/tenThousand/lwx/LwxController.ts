import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwx")
export default class LwxController {
  @operation({
    summary: "Get Lwx",
  })
  @get()
  static getLwx = procedure({
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
