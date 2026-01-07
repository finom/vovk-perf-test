import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwa")
export default class HwaController {
  @operation({
    summary: "Get Hwa",
  })
  @get()
  static getHwa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwa",
  })
  @post("{id}")
  static createHwa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
