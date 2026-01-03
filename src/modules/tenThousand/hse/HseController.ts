import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hses")
export default class HseController {
  @operation({
    summary: "Get Hses",
  })
  @get()
  static getHses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hse",
  })
  @post("{id}")
  static createHse = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
