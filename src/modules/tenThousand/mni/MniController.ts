import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnis")
export default class MniController {
  @operation({
    summary: "Get Mnis",
  })
  @get()
  static getMnis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mni",
  })
  @post("{id}")
  static createMni = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
