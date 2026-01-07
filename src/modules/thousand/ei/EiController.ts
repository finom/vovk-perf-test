import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ei")
export default class EiController {
  @operation({
    summary: "Get Ei",
  })
  @get()
  static getEi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ei",
  })
  @post("{id}")
  static createEi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
