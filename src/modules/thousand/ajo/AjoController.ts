import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajos")
export default class AjoController {
  @operation({
    summary: "Get Ajos",
  })
  @get()
  static getAjos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajo",
  })
  @post("{id}")
  static createAjo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
