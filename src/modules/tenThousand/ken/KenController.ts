import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kens")
export default class KenController {
  @operation({
    summary: "Get Kens",
  })
  @get()
  static getKens = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ken",
  })
  @post("{id}")
  static createKen = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
