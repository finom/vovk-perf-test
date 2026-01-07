import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hke")
export default class HkeController {
  @operation({
    summary: "Get Hke",
  })
  @get()
  static getHke = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hke",
  })
  @post("{id}")
  static createHke = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
