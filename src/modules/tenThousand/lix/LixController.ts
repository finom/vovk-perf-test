import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lix")
export default class LixController {
  @operation({
    summary: "Get Lix",
  })
  @get()
  static getLix = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lix",
  })
  @post("{id}")
  static createLix = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
