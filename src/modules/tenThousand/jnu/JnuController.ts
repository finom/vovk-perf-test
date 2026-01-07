import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnu")
export default class JnuController {
  @operation({
    summary: "Get Jnu",
  })
  @get()
  static getJnu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jnu",
  })
  @post("{id}")
  static createJnu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
