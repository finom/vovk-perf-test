import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awo")
export default class AwoController {
  @operation({
    summary: "Get Awo",
  })
  @get()
  static getAwo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awo",
  })
  @post("{id}")
  static createAwo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
