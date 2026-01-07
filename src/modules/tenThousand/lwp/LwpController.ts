import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwp")
export default class LwpController {
  @operation({
    summary: "Get Lwp",
  })
  @get()
  static getLwp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwp",
  })
  @post("{id}")
  static createLwp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
