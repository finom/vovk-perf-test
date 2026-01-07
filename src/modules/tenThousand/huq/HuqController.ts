import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huq")
export default class HuqController {
  @operation({
    summary: "Get Huq",
  })
  @get()
  static getHuq = procedure({
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
