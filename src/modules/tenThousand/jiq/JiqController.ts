import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jiqs")
export default class JiqController {
  @operation({
    summary: "Get Jiqs",
  })
  @get()
  static getJiqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jiq",
  })
  @post("{id}")
  static createJiq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
