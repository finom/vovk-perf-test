import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkes")
export default class HkeController {
  @operation({
    summary: "Get Hkes",
  })
  @get()
  static getHkes = procedure({
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
