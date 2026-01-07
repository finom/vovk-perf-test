import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fd")
export default class FdController {
  @operation({
    summary: "Get Fd",
  })
  @get()
  static getFd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fd",
  })
  @post("{id}")
  static createFd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
