import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnu")
export default class MnuController {
  @operation({
    summary: "Get Mnu",
  })
  @get()
  static getMnu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mnu",
  })
  @post("{id}")
  static createMnu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
