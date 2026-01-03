import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftus")
export default class FtuController {
  @operation({
    summary: "Get Ftus",
  })
  @get()
  static getFtus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ftu",
  })
  @post("{id}")
  static createFtu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
