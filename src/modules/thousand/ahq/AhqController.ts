import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahqs")
export default class AhqController {
  @operation({
    summary: "Get Ahqs",
  })
  @get()
  static getAhqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahq",
  })
  @post("{id}")
  static createAhq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
