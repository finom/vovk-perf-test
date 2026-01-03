import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lws")
export default class LwController {
  @operation({
    summary: "Get Lws",
  })
  @get()
  static getLws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lw",
  })
  @post("{id}")
  static createLw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
