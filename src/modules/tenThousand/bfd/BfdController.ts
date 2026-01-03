import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfds")
export default class BfdController {
  @operation({
    summary: "Get Bfds",
  })
  @get()
  static getBfds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfd",
  })
  @post("{id}")
  static createBfd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
