import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lye")
export default class LyeController {
  @operation({
    summary: "Get Lye",
  })
  @get()
  static getLye = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lye",
  })
  @post("{id}")
  static createLye = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
