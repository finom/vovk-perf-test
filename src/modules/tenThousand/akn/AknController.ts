import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akns")
export default class AknController {
  @operation({
    summary: "Get Akns",
  })
  @get()
  static getAkns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Akn",
  })
  @post("{id}")
  static createAkn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
