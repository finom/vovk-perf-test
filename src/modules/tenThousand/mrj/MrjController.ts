import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrjs")
export default class MrjController {
  @operation({
    summary: "Get Mrjs",
  })
  @get()
  static getMrjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mrj",
  })
  @post("{id}")
  static createMrj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
