import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ll")
export default class LlController {
  @operation({
    summary: "Get Ll",
  })
  @get()
  static getLl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ll",
  })
  @post("{id}")
  static createLl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
