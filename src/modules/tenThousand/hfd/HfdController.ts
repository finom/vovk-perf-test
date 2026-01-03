import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfds")
export default class HfdController {
  @operation({
    summary: "Get Hfds",
  })
  @get()
  static getHfds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfd",
  })
  @post("{id}")
  static createHfd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
