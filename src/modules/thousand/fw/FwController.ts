import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fws")
export default class FwController {
  @operation({
    summary: "Get Fws",
  })
  @get()
  static getFws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fw",
  })
  @post("{id}")
  static createFw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
