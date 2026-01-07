import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mer")
export default class MerController {
  @operation({
    summary: "Get Mer",
  })
  @get()
  static getMer = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mer",
  })
  @post("{id}")
  static createMer = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
