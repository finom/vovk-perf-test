import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mug")
export default class MugController {
  @operation({
    summary: "Get Mug",
  })
  @get()
  static getMug = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mug",
  })
  @post("{id}")
  static createMug = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
