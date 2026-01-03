import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwts")
export default class LwtController {
  @operation({
    summary: "Get Lwts",
  })
  @get()
  static getLwts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwt",
  })
  @post("{id}")
  static createLwt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
