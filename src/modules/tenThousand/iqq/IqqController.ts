import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqqs")
export default class IqqController {
  @operation({
    summary: "Get Iqqs",
  })
  @get()
  static getIqqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqq",
  })
  @post("{id}")
  static createIqq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
