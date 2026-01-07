import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqu")
export default class NquController {
  @operation({
    summary: "Get Nqu",
  })
  @get()
  static getNqu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqu",
  })
  @post("{id}")
  static createNqu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
