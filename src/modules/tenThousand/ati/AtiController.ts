import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ati")
export default class AtiController {
  @operation({
    summary: "Get Ati",
  })
  @get()
  static getAti = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ati",
  })
  @post("{id}")
  static createAti = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
