import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrzs")
export default class LrzController {
  @operation({
    summary: "Get Lrzs",
  })
  @get()
  static getLrzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lrz",
  })
  @post("{id}")
  static createLrz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
