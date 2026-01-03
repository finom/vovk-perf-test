import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hafs")
export default class HafController {
  @operation({
    summary: "Get Hafs",
  })
  @get()
  static getHafs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Haf",
  })
  @post("{id}")
  static createHaf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
