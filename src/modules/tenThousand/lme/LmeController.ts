import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lme")
export default class LmeController {
  @operation({
    summary: "Get Lme",
  })
  @get()
  static getLme = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lme",
  })
  @post("{id}")
  static createLme = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
