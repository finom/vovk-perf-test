import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfds")
export default class LfdController {
  @operation({
    summary: "Get Lfds",
  })
  @get()
  static getLfds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfd",
  })
  @post("{id}")
  static createLfd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
