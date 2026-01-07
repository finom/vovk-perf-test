import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgo")
export default class LgoController {
  @operation({
    summary: "Get Lgo",
  })
  @get()
  static getLgo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgo",
  })
  @post("{id}")
  static createLgo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
