import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bar")
export default class BarController {
  @operation({
    summary: "Get Bar",
  })
  @get()
  static getBar = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bar",
  })
  @post("{id}")
  static createBar = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
