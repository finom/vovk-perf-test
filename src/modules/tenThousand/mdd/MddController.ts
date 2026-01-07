import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdd")
export default class MddController {
  @operation({
    summary: "Get Mdd",
  })
  @get()
  static getMdd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdd",
  })
  @post("{id}")
  static createMdd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
