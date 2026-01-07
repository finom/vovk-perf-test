import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lty")
export default class LtyController {
  @operation({
    summary: "Get Lty",
  })
  @get()
  static getLty = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lty",
  })
  @post("{id}")
  static createLty = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
