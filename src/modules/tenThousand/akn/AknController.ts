import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akn")
export default class AknController {
  @operation({
    summary: "Get Akn",
  })
  @get()
  static getAkn = procedure({
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
