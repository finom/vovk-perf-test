import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mozs")
export default class MozController {
  @operation({
    summary: "Get Mozs",
  })
  @get()
  static getMozs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Moz",
  })
  @post("{id}")
  static createMoz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
