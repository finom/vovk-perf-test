import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyj")
export default class JyjController {
  @operation({
    summary: "Get Jyj",
  })
  @get()
  static getJyj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyj",
  })
  @post("{id}")
  static createJyj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
