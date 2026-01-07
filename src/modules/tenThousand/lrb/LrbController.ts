import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrb")
export default class LrbController {
  @operation({
    summary: "Get Lrb",
  })
  @get()
  static getLrb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lrb",
  })
  @post("{id}")
  static createLrb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
