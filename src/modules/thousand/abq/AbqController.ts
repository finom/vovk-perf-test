import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abqs")
export default class AbqController {
  @operation({
    summary: "Get Abqs",
  })
  @get()
  static getAbqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abq",
  })
  @post("{id}")
  static createAbq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
