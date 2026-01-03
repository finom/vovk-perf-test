import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqqs")
export default class AqqController {
  @operation({
    summary: "Get Aqqs",
  })
  @get()
  static getAqqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqq",
  })
  @post("{id}")
  static createAqq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
