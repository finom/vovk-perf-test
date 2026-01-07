import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrb")
export default class HrbController {
  @operation({
    summary: "Get Hrb",
  })
  @get()
  static getHrb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hrb",
  })
  @post("{id}")
  static createHrb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
