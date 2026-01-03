import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edxes")
export default class EdxController {
  @operation({
    summary: "Get Edxes",
  })
  @get()
  static getEdxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edx",
  })
  @post("{id}")
  static createEdx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
