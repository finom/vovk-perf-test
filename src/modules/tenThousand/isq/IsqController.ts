import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isqs")
export default class IsqController {
  @operation({
    summary: "Get Isqs",
  })
  @get()
  static getIsqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isq",
  })
  @post("{id}")
  static createIsq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
