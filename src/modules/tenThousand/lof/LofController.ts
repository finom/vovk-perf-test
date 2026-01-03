import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lofs")
export default class LofController {
  @operation({
    summary: "Get Lofs",
  })
  @get()
  static getLofs = procedure({
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
