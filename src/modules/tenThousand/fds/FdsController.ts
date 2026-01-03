import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fds")
export default class FdsController {
  @operation({
    summary: "Get Fds",
  })
  @get()
  static getFds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fds",
  })
  @post("{id}")
  static createFds = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
