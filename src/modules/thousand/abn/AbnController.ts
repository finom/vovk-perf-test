import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abn")
export default class AbnController {
  @operation({
    summary: "Get Abn",
  })
  @get()
  static getAbn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abn",
  })
  @post("{id}")
  static createAbn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
