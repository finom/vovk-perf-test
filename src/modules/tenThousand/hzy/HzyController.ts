import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzies")
export default class HzyController {
  @operation({
    summary: "Get Hzies",
  })
  @get()
  static getHzies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzy",
  })
  @post("{id}")
  static createHzy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
