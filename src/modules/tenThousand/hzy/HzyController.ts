import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzy")
export default class HzyController {
  @operation({
    summary: "Get Hzy",
  })
  @get()
  static getHzy = procedure({
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
