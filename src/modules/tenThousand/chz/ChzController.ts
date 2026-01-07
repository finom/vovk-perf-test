import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chz")
export default class ChzController {
  @operation({
    summary: "Get Chz",
  })
  @get()
  static getChz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Chz",
  })
  @post("{id}")
  static createChz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
