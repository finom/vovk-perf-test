import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzu")
export default class HzuController {
  @operation({
    summary: "Get Hzu",
  })
  @get()
  static getHzu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzu",
  })
  @post("{id}")
  static createHzu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
