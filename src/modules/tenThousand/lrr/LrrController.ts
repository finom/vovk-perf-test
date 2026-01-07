import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrr")
export default class LrrController {
  @operation({
    summary: "Get Lrr",
  })
  @get()
  static getLrr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lrr",
  })
  @post("{id}")
  static createLrr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
