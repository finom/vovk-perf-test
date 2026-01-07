import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akb")
export default class AkbController {
  @operation({
    summary: "Get Akb",
  })
  @get()
  static getAkb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Akb",
  })
  @post("{id}")
  static createAkb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
