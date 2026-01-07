import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lof")
export default class LofController {
  @operation({
    summary: "Get Lof",
  })
  @get()
  static getLof = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lof",
  })
  @post("{id}")
  static createLof = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
