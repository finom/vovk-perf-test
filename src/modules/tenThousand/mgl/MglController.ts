import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgls")
export default class MglController {
  @operation({
    summary: "Get Mgls",
  })
  @get()
  static getMgls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mgl",
  })
  @post("{id}")
  static createMgl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
