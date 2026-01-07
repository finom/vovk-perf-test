import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erk")
export default class ErkController {
  @operation({
    summary: "Get Erk",
  })
  @get()
  static getErk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Erk",
  })
  @post("{id}")
  static createErk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
