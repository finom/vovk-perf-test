import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqu")
export default class MquController {
  @operation({
    summary: "Get Mqu",
  })
  @get()
  static getMqu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqu",
  })
  @post("{id}")
  static createMqu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
