import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwps")
export default class LwpController {
  @operation({
    summary: "Get Lwps",
  })
  @get()
  static getLwps = procedure({
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
