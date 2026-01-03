import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llos")
export default class LloController {
  @operation({
    summary: "Get Llos",
  })
  @get()
  static getLlos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Llo",
  })
  @post("{id}")
  static createLlo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
