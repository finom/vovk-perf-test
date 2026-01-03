import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htis")
export default class HtiController {
  @operation({
    summary: "Get Htis",
  })
  @get()
  static getHtis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hti",
  })
  @post("{id}")
  static createHti = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
