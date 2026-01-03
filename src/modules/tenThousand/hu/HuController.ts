import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hus")
export default class HuController {
  @operation({
    summary: "Get Hus",
  })
  @get()
  static getHus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hu",
  })
  @post("{id}")
  static createHu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
