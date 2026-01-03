import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfds")
export default class GfdController {
  @operation({
    summary: "Get Gfds",
  })
  @get()
  static getGfds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfd",
  })
  @post("{id}")
  static createGfd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
