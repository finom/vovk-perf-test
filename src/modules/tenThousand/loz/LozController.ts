import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lozs")
export default class LozController {
  @operation({
    summary: "Get Lozs",
  })
  @get()
  static getLozs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Loz",
  })
  @post("{id}")
  static createLoz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
