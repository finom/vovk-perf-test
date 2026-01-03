import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huqs")
export default class HuqController {
  @operation({
    summary: "Get Huqs",
  })
  @get()
  static getHuqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Huq",
  })
  @post("{id}")
  static createHuq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
