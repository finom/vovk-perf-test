import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyhs")
export default class IyhController {
  @operation({
    summary: "Get Iyhs",
  })
  @get()
  static getIyhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyh",
  })
  @post("{id}")
  static createIyh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
