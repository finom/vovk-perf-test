import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hobs")
export default class HobController {
  @operation({
    summary: "Get Hobs",
  })
  @get()
  static getHobs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hob",
  })
  @post("{id}")
  static createHob = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
