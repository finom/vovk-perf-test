import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyh")
export default class JyhController {
  @operation({
    summary: "Get Jyh",
  })
  @get()
  static getJyh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyh",
  })
  @post("{id}")
  static createJyh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
