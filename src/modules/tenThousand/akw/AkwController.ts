import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akws")
export default class AkwController {
  @operation({
    summary: "Get Akws",
  })
  @get()
  static getAkws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Akw",
  })
  @post("{id}")
  static createAkw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
