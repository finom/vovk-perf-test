import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ars")
export default class ArController {
  @operation({
    summary: "Get Ars",
  })
  @get()
  static getArs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ar",
  })
  @post("{id}")
  static createAr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
