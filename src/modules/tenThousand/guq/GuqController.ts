import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guqs")
export default class GuqController {
  @operation({
    summary: "Get Guqs",
  })
  @get()
  static getGuqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Guq",
  })
  @post("{id}")
  static createGuq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
