import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmes")
export default class LmeController {
  @operation({
    summary: "Get Lmes",
  })
  @get()
  static getLmes = procedure({
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
