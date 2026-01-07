import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czy")
export default class CzyController {
  @operation({
    summary: "Get Czy",
  })
  @get()
  static getCzy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czy",
  })
  @post("{id}")
  static createCzy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
