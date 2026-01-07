import { procedure, prefix, get, post, operation } from "vovk";

@prefix("leh")
export default class LehController {
  @operation({
    summary: "Get Leh",
  })
  @get()
  static getLeh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Leh",
  })
  @post("{id}")
  static createLeh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
